import { UserModel } from "@domain/models/user"

export interface IFindUserByIdRepository {
  findById(id: number): Promise<UserModel | null>
}
