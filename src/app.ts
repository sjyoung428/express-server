import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import feedRouter from "./routes/feed.route";
import { validateToken } from "./middlewares/validateToken";

const app = express();
const logger = morgan("dev");

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/auth", authRouter);
app.use("/feed", validateToken, feedRouter);
app.use("/users", validateToken, userRouter);

export default app;
