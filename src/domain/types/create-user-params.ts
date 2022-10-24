import { UserModel } from "../models/user"

export type CreateUserParams = Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'>