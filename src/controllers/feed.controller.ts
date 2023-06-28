import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { api } from "../api/axios.instance";

export const feed = async (req: Request, res: Response) => {
  try {
    const response = await api.post("/feed");
    const { data } = response;
    console.log(data);
  } catch (err) {
    console.error(err);
  }

  return res.status(StatusCodes.ACCEPTED).json({
    message: "버튼 눌림",
  });
};
