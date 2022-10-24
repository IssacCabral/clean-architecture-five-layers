import { UserModel } from "../models/user"

export type CreateUserParams = Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'>

export interface ICreateUser{
  create(user: CreateUserParams): Promise<UserModel | Error>
}
