import jwt from "jsonwebtoken";

export const JWT_SECRET = process.env.JWT_SECRET || "";

export const createToken = (value: string) => {
  return jwt.sign(value, JWT_SECRET);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};
