import express from "express";
import authRouter from "./auth.router";
import taskRouter from "./task.router";

const router = express.Router();

router.use(authRouter);
router.use(taskRouter);

export default router;