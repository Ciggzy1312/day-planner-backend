import express from "express";
import validate from "../middlewares/validateResource";
import authMiddleware from "../middlewares/authMiddleware";
import { createTaskSchema } from "../schema/task.schema";
import { createTaskHandler, getTasksHandler } from "../controllers/task.controller";

const router = express.Router();

router.post("/api/task", authMiddleware, validate(createTaskSchema), createTaskHandler);

router.get("/api/task", authMiddleware, getTasksHandler);

export default router;