import { Router } from "express";
import { feed } from "../controllers/feed.controller";

const router = Router();

router.post("/", feed);

export default router;
