import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const logger = morgan("dev");

app.use(express.json());
app.use(cors());
app.use(logger);

export default app;
