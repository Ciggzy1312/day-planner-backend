import { PrismaClient } from "@prisma/client";
import logger from "../utils/logger";
import { TaskInput } from "../types/types";

const prisma = new PrismaClient();

export const createTask = async (input: TaskInput) => {
    try {
        const task = await prisma.task.create({ data: input });

        return { task, error: null };
    } catch (error: any) {
        logger.error(error.message);
        await prisma.$disconnect();
        return { error: "Task creation failed" };
    }
}

export const getTasks = async (userId: string) => {
    try {
        const tasks = await prisma.task.findMany({ where: { userId } });

        return { tasks, error: null };
    } catch (error: any) {
        logger.error(error.message);
        await prisma.$disconnect();
        return { error: "Failed to fetch tasks" };
    }
}