import { UserModel } from "../models/user"

export interface IDeleteUser{
  delete(id: string): Promise<UserModel | Error>
}