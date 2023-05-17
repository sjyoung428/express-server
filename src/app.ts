import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import { validateToken } from "./middlewares/validateToken";

const app = express();
const logger = morgan("dev");

app.use(express.json());
app.use(cors());
app.use(logger);

app.use("/auth", authRouter);
app.use("/user", validateToken, userRouter);

export default app;
