import { IDeleteUser } from "@domain/usecases/delete-user"
import { UserTypeOrmRepository } from "../../../../infra/db/user-repo/user-typeorm-repository"
import { DbDeleteUser } from "../../../../data/usecases/db-delete-user"

export const makeDbDeleteUser = (): IDeleteUser => {
  const usersTypeOrmRepository = new UserTypeOrmRepository()

  return new DbDeleteUser(usersTypeOrmRepository, usersTypeOrmRepository)
}
