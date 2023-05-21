import { PrismaClient } from "@prisma/client";
import { EncryptPassword } from "./prisma.middlewares";

declare global {
  var db: PrismaClient | undefined;
}
const db = global.db || new PrismaClient();

if (process.env.NODE_ENV === "development") global.db = db;

export default db;

db.$use(EncryptPassword);
