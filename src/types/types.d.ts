declare global {
    namespace Express {
        interface Request {
            user: any;
        }
    }
}

export interface UserInput {
    username: string;
    email: string;
    password: string;
}

export interface TaskInput {
    title: string
    label: string
    priority: string
    date: string
    plannedTime: string
    actualTime: string
    isTimeboxed: boolean
    isCompleted: boolean
    userId: string
}