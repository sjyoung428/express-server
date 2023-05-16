import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

export const db = new PrismaClient();

db.$use(async (params, next) => {
  if (params.action === "create" && params.model === "User") {
    const user = params.args.data;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    params.args.data = user;
  }
  return await next(params);
});
