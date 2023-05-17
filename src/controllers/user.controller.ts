import { Request, Response } from "express";
import { parseToken, verifyToken } from "../utils/authorize.util";
import { findUser, updateUsername } from "../services/user.service";
import { StatusCodes } from "http-status-codes";

export const getMe = async (req: Request, res: Response) => {
  let token = "";
  if (req.headers.authorization) {
    token = parseToken(req.headers.authorization);
  }

  const email = verifyToken(token);
  if (typeof email === "string") {
    const user = await findUser(email);
    return res.status(StatusCodes.OK).json({
      id: user?.id,
      email: user?.email,
      username: user?.username,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    });
  }
  return res.status(StatusCodes.BAD_REQUEST).send("유효하지 않은 토큰입니다");
};

export const updateMe = async (req: Request, res: Response) => {
  const { username } = req.body;

  if (username.length < 2) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("닉네임은 2글자 이상이어야 합니다");
  }

  let token = "";
  if (req.headers.authorization) {
    token = parseToken(req.headers.authorization);
  }

  const email = verifyToken(token);
  if (typeof email === "string") {
    await updateUsername(email, username);
    return res.status(StatusCodes.OK).send({
      message: "닉네임 변경 성공",
    });
  }
  return res.status(StatusCodes.BAD_REQUEST).send("유효하지 않은 토큰입니다");
};
