import { UserModel } from "@domain/models/user"

export interface IFindUserByEmailRepository {
  findByEmail(email: string): Promise<UserModel | null>
}
