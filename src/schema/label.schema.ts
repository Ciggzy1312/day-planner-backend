import { z } from "zod";

export const createLabelSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    color: z.string({
        required_error: "Color is required",
        invalid_type_error: "Color must be a string",
    }),
});