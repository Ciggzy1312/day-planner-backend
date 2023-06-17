import express from "express";
import authRouter from "./auth.router";
import taskRouter from "./task.router";
import labelRouter from "./label.router";

const router = express.Router();

router.use(authRouter);
router.use(taskRouter);
router.use(labelRouter);

export default router;