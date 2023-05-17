import { Request, Response } from "express";
import { verifyToken } from "../utils/authorize.util";
import { findUser } from "../services/user.service";
import { StatusCodes } from "http-status-codes";

export const getMe = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.includes("Bearer")
    ? req.headers.authorization.split(" ")[1]
    : "";
  const email = verifyToken(token);
  if (typeof email === "string") {
    const user = await findUser(email);
    return res.status(StatusCodes.OK).send(user);
  }
  return res.status(StatusCodes.BAD_REQUEST).send("유효하지 않은 토큰입니다");
};
