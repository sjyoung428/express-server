import { Router } from "express";
import { login } from "../controllers/auth.controller";
import { validateToken } from "../middlewares/validateToken";

const router = Router();

router.post("/login", login);
router.post("/signup");

export default router;
