import { UserModel } from "../models/user";

export interface IFindUserById{
  find(id: string): Promise<UserModel | null>
}