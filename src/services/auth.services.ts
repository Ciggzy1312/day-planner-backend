import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import logger from "../utils/logger";
import { UserInput } from "../types/types";

const prisma = new PrismaClient();

export const createUser = async (input: UserInput) => {
    try {
        const userExists = await prisma.user.findUnique({ where: { email: input.email } });
        if (userExists) {
            return { error: "User already exists" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(input.password, salt);
        input.password = hashedPassword;

        const user = await prisma.user.create({ data: input });
        return { user, error: null };
    } catch (error: any) {
        logger.error(error.message);
        await prisma.$disconnect();
        return { error: "User registration failed" };
    }
}

export const loginUser = async (input: UserInput) => {
    try {
        const user = await prisma.user.findUnique({ where: { email: input.email } });

        if (user && (await bcrypt.compare(input.password, user.password))) {
            const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, process.env.SECRET!, { expiresIn: '30d' })
            return { token, error: null };
        }

        return { error: "Invalid credentials" };
    } catch (error: any) {
        logger.error(error.message);
        await prisma.$disconnect()
        return { error: "User login failed" };
    }
}