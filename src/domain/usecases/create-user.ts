import { UserModel } from "../models/user"
import { CreateUserParams } from "../types/create-user-params"

export interface ICreateUser{
  create(user: CreateUserParams): Promise<UserModel | Error>
}
