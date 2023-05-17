import { UserInput } from "../types/user";
import db from "./prisma";

export const createUser = ({ email, password }: UserInput) => {
  const username = email.split("@")[0] || "";

  return db.user.create({
    data: {
      email,
      username,
      password,
    },
  });
};

export const findUser = (email: string) => {
  return db.user.findUnique({
    where: {
      email,
    },
  });
};

export const updateUsername = async (email: string, username: string) => {
  return db.user.update({
    where: {
      email,
    },
    data: {
      username,
    },
  });
};
