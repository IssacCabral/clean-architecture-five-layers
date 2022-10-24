import { UserModel } from "../models/user";

export interface IFindUserByEmail{
  find(email: string): Promise<UserModel | null>
}