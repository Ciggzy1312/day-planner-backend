import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import logger from "../utils/logger";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.SECRET!);
        req.user = decoded;
        next();
    } catch (error) {
        logger.error(error);
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default authMiddleware;