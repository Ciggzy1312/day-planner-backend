import { Request, Response } from "express";
import logger from "../utils/logger";
import { completeTask, createTask, getTasks } from "../services/task.services";

const createTaskHandler = async (req: Request, res: Response) => {
    try {
        req.body.userId = req.user.id;
        const { task, error } = await createTask(req.body);

        if (error) {
            return res.status(400).json({ message: error });
        }

        return res.status(201).json({ message: "Task created successfully", task });
    } catch (error) {
        logger.error(error);
        res.status(400).json({ message: "Task creation failed" });
    }
}

const getTasksHandler = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id;
        const { tasks, error } = await getTasks(userId);
        if (error) {
            return res.status(400).json({ message: error });
        }

        return res.status(201).json({ message: "Tasks fetched successfully", tasks });
    } catch (error) {
        logger.error(error);
        res.status(400).json({ message: "Failed to fetch tasks" });
    }
}

const completeTaskHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { isCompleted } = req.body;
        const { task, error } = await completeTask(id, isCompleted);

        if (error) {
            return res.status(400).json({ message: error });
        }

        return res.status(200).json({ message: "Task updated successfully", task });
    } catch (error) {
        logger.error(error);
        res.status(400).json({ message: "Task updation failed" });
    }
};

export { createTaskHandler, getTasksHandler, completeTaskHandler }