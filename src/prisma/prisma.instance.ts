import { PrismaClient } from "@prisma/client";
import { EncryptPassword } from "./middlewares/encryptPassword";

// declare global {
//   var db: PrismaClient | undefined;
// }
// const db = global.db || new PrismaClient();

// if (process.env.NODE_ENV === "development") global.db = db;

// export default db;

//https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

const globalForPrisma = global as unknown as {
  db: PrismaClient | undefined;
};

export const db =
  globalForPrisma.db ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;

db.$use(EncryptPassword);
