import { UserModel } from "../models/user"

export type UpdateUserParams = {
  name?: string
  cpf?: string
  email?: string
  password?: string
}

export interface IUpdateUser{
  update(user: UserModel, params: UpdateUserParams): Promise<UserModel | Error>
}