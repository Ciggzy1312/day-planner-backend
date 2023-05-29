import { Request, Response } from "express";
import { createUser, loginUser } from "../services/auth.services";
import logger from "../utils/logger";

const createUserHandler = async (req: Request, res: Response) => {
    try {
        const { user, error } = await createUser(req.body);
        if (error) {
            return res.status(400).json({ message: error });
        }

        return res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        logger.error(error);
        res.status(400).json({ message: "User registration failed" });
    }
}

const loginUserHandler = async (req: Request, res: Response) => {
    try {
        const { token, error } = await loginUser(req.body);

        if (error) {
            return res.status(400).json({ message: error });
        }

        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' });
        return res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        logger.error(error);
        res.status(400).json({ message: "User login failed" });
    }
}

export { createUserHandler, loginUserHandler }