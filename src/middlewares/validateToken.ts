import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Token is missing" });
  }
  next();
};
