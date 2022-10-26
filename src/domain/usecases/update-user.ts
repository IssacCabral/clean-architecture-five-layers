import { UserModel } from "../models/user"
import { UpdateUserParams } from "../types/update-user-params"

export interface IUpdateUser{
  update(user: UserModel, params: UpdateUserParams): Promise<UserModel | Error>
}