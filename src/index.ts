import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "./utils/logger";

import router from "./routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(cookieParser());

app.use(router);

app.listen(5000, async () => {
    logger.info("Server is running on port 5000");
});