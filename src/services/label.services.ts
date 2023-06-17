import { PrismaClient } from "@prisma/client";
import logger from "../utils/logger";
import { LabelInput } from "../types/types";

const prisma = new PrismaClient();

export const createLabel = async (input: LabelInput) => {
    try {
        const label = await prisma.label.create({ data: input });
        return { label, error: null };
    } catch (error: any) {
        logger.error(error.message);
        await prisma.$disconnect();
        return { error: "Label creation failed" };
    }
}