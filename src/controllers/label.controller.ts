import { Request, Response } from "express";
import logger from "../utils/logger";
import { createLabel, getLabels } from "../services/label.services";


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

const getLabelsHandler = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id;
        const { labels, error } = await getLabels(userId);
        if (error) {
            return res.status(400).json({ message: error });
        }

        return res.status(200).json({ message: "Labels fetched successfully", labels });
    } catch (error: any) {
        logger.error(error);
        res.status(400).json({ message: "Failed to fetch labels" });
    }
};

export { createLabelHandler, getLabelsHandler }