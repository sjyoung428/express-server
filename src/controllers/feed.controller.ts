import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { api } from "../api/axios.instance";

export const feed = async (req: Request, res: Response) => {
  const response = await api.post("/post?message=TEXT_MESSAGE");
  const { data } = response;
  console.log(data);

  return res.status(StatusCodes.ACCEPTED).json({
    message: "버튼 눌림",
  });
};
