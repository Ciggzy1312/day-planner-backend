import express from "express";
import { createUserHandler, loginUserHandler } from "../controllers/auth.controller";
import validate from "../middlewares/validateResource";
import { createUserSchema, loginUserSchema } from "../schema/user.schema";

const router = express.Router();

router.post("/api/users/register", validate(createUserSchema), createUserHandler);

router.post("/api/users/login", validate(loginUserSchema), loginUserHandler);

export default router;