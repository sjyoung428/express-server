export interface User {
  id: string;
  email: string;
  username?: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export type UserInput = Pick<User, "email" | "password">;
