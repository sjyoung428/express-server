import { Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { User } from "../types/user";

export const EncryptPassword: Prisma.Middleware<User> = async (
  params: Prisma.MiddlewareParams,
  next
) => {
  if (params.action === "create" && params.model === "User") {
    let user = params.args.data as User;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
  }
  const result = await next(params);
  return result;
};
