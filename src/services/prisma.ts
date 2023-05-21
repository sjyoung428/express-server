import { PrismaClient, User } from "@prisma/client";
import * as bcrypt from "bcrypt";

declare global {
  var db: PrismaClient | undefined;
}
const db = global.db || new PrismaClient();

if (process.env.NODE_ENV === "development") global.db = db;

export default db;

db.$use(async (params, next) => {
  if (params.action === "create" && params.model === "User") {
    const user = params.args.data as User;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    params.args.data = user;
  }
  return await next(params);
});
