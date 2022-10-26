import { UserModel } from "../models/user";

export interface IDeleteUser{
  delete(id: number): Promise<UserModel | Error>
}