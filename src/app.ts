import express from "express";
import mqtt from "mqtt";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import feedRouter from "./routes/feed.route";
import { validateToken } from "./middlewares/validateToken";

const MQTT = process.env.MQTT || "";

const app = express();
const logger = morgan("dev");

export const client = mqtt.connect(MQTT);

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/auth", authRouter);
app.use("/feed", validateToken, feedRouter);
app.use("/users", validateToken, userRouter);

export default app;
