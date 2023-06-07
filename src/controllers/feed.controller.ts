import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { client } from "../app";

const TOPIC = process.env.TOPIC || "";

export const feed = async (req: Request, res: Response) => {
  //const response =  await api.post("/feed");
  //const { data } = response;
  //console.log(data);
  client.publish(TOPIC, "ON");

  return res.status(StatusCodes.ACCEPTED).json({
    message: "버튼 눌림",
  });
};
