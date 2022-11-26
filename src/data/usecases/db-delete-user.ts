import { IDeleteUser } from "@domain/usecases/delete-user"
import { UserModel } from "@domain/models/user"
import { IDeleteUserRepository } from "../protocols/db/delete-user-repository"
import { IFindUserByIdRepository } from "../protocols/db/find-user-by-id-repository"
import { NotFoundError } from "../../presentation/errors/not-found-error"

export class DbDeleteUser implements IDeleteUser {
  constructor(
    private readonly deleteUserRepository: IDeleteUserRepository,
    private readonly findUserByIdRepository: IFindUserByIdRepository
  ) {}

  async delete(id: number): Promise<UserModel | Error> {
    const user = await this.findUserByIdRepository.findById(id)
    if (!user) return new NotFoundError("User")

    await this.deleteUserRepository.deleteUser(id)

    return user
  }
}
