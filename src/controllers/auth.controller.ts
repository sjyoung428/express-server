import { Request, Response } from "express";
import { UserInput } from "../types/user";
import { loginValidator } from "../utils/validator";
import { StatusCodes } from "http-status-codes";
import { findUser } from "../services/auth.service";
import { createToken } from "../utils/authorize.util";

export const login = async (req: Request, res: Response) => {
  const { email, password }: UserInput = req.body;

  const { isValid, message } = loginValidator({ email, password });

  if (!isValid) {
    return res.status(StatusCodes.BAD_REQUEST).send(message);
  }

  const user = await findUser(email);

  if (user) {
    return res.status(StatusCodes.OK).send({
      message: "로그인 성공",
      token: createToken(email),
    });
  } else {
    return res.status(StatusCodes.BAD_REQUEST).send("존재하지 않는 유저입니다");
  }
};
