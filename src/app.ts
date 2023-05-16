import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.route";

const app = express();
const logger = morgan("dev");

app.use(express.json());
app.use(cors());
app.use(logger);

app.use("/auth", authRouter);

export default app;
