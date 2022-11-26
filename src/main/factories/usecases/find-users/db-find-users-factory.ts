import { IFindUsers } from "@domain/usecases/find-users"
import { DbFindUsers } from "../../../../data/usecases/db-find-users"
import { UserTypeOrmRepository } from "../../../../infra/db/user-repo/user-typeorm-repository"

export const makeDbFindUsers = (): IFindUsers => {
  const userTypeOrmRepository = new UserTypeOrmRepository()

  return new DbFindUsers(userTypeOrmRepository)
}
