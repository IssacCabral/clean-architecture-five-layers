import { DbCreateUser } from "../../../../data/usecases/db-create-user";
import { ICreateUser } from "../../../../domain/usecases/create-user";
import { UserTypeOrmRepository } from "../../../../infra/db/user-repo/user-typeorm-repository";

export const makeDbCreateUser = (): ICreateUser => {
  const salt = 12
  const usersTypeOrmRepository = new UserTypeOrmRepository()

  return new DbCreateUser(
    usersTypeOrmRepository,
    usersTypeOrmRepository,
    usersTypeOrmRepository
  )
}