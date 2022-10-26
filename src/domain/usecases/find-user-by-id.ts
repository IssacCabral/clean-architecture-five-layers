import { UserModel } from "../models/user";

export interface IFindUserById{
  find(id: number): Promise<UserModel | null>
}