import express from "express";
import validate from "../middlewares/validateResource";
import authMiddleware from "../middlewares/authMiddleware";
import { createTaskSchema, completeTaskSchema } from "../schema/task.schema";
import { createTaskHandler, getTasksHandler, completeTaskHandler } from "../controllers/task.controller";

const router = express.Router();

router.post("/api/task", authMiddleware, validate(createTaskSchema), createTaskHandler);

router.get("/api/task", authMiddleware, getTasksHandler);

router.put("/api/task/:id/complete", authMiddleware, validate(completeTaskSchema), completeTaskHandler);

export default router;