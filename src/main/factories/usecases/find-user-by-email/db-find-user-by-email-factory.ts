import { DbFindUserByEmail } from "../../../../data/usecases/db-find-user-by-email"
import { UserTypeOrmRepository } from "../../../../infra/db/user-repo/user-typeorm-repository"

export const makeDbFindUserByEmail = (): DbFindUserByEmail => {
  const userTypeOrmRepository = new UserTypeOrmRepository()

  return new DbFindUserByEmail(
    userTypeOrmRepository
  )
}