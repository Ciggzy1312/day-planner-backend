import { Request, Response } from "express";
import logger from "../utils/logger";
import { createLabel } from "../services/label.services";


const createLabelHandler = async (req: Request, res: Response) => {
    try {
        req.body.userId = req.user.id;
        const { label, error } = await createLabel(req.body);

        if (error) {
            return res.status(400).json({ message: error });
        }

        return res.status(201).json({ message: "Label created successfully", label });
    } catch (error) {
        logger.error(error);
        res.status(400).json({ message: "Label creation failed" });
    }
};

export { createLabelHandler }