import { UserModel } from "@domain/models/user"
import { UpdateUserParams } from "@domain/types/update-user-params"

export interface IUpdateUserRepository {
  updateUser(id: number, params: UpdateUserParams): Promise<UserModel>
}
