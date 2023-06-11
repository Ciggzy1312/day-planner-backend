import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title must be a string",
    }),
    label: z.string({
        required_error: "Label is required",
        invalid_type_error: "Label must be a string",
    }),
    priority: z.string({
        required_error: "Priority is required",
        invalid_type_error: "Priority must be a string",
    }),
    date: z.string({
        required_error: "Date is required",
        invalid_type_error: "Date must be a string",
    }),
    plannedTime: z.string({
        required_error: "Planned Time is required",
        invalid_type_error: "Planned Time must be a string",
    }),
    actualTime: z.string({
        required_error: "Actual Time is required",
        invalid_type_error: "Actual Time must be a string",
    }),
    isTimeboxed: z.boolean({
        required_error: "Is Timeboxed is required",
        invalid_type_error: "Is Timeboxed must be a boolean",
    }),
    isCompleted: z.boolean({
        required_error: "Is Completed is required",
        invalid_type_error: "Is Completed must be a boolean",
    })
});