import { IUpdateUser } from "../../../../domain/usecases/update-user"
import { UserTypeOrmRepository } from "../../../../infra/db/user-repo/user-typeorm-repository"
import { DbUpdateUser } from "../../../../data/usecases/db-update-user"

export const makeDbUpdateUser = (): IUpdateUser => {
  const userTypeOrmRepository = new UserTypeOrmRepository()

  return new DbUpdateUser(
    userTypeOrmRepository,
    userTypeOrmRepository,
    userTypeOrmRepository
  )
}