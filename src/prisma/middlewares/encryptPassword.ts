import { Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { User } from "../../types/user";

export const EncryptPassword: Prisma.Middleware<User> = async (
  params,
  next
) => {
  if (params.action === "create" && params.model === "User") {
    const user = params.args.data as User;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
  }
  const result = await next(params);
  return result;
};
