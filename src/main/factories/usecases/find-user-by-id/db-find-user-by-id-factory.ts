import { IFindUserById } from "../../../../domain/usecases/find-user-by-id";
import { UserTypeOrmRepository } from "../../../../infra/db/user-repo/user-typeorm-repository";
import { DbFindUserById } from "../../../../data/usecases/db-find-user-by-id";

export const makeDbFindUserById = (): IFindUserById => {
  const userTypeOrmRepository = new UserTypeOrmRepository()

  return new DbFindUserById(
    userTypeOrmRepository
  )
}