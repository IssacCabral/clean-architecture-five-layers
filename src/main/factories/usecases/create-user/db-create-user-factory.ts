import { DbCreateUser } from "../../../../data/usecases/db-create-user";
import { ICreateUser } from "../../../../domain/usecases/create-user";
import { BcryptAdapter } from "../../../../infra/cryptography/bcrypt-adapter";
import { UserTypeOrmRepository } from "../../../../infra/db/user-repo/user-typeorm-repository";

export const makeDbCreateUser = (): ICreateUser => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const usersTypeOrmRepository = new UserTypeOrmRepository()

  return new DbCreateUser(
    usersTypeOrmRepository,
    usersTypeOrmRepository,
    usersTypeOrmRepository,
    bcryptAdapter
  )
}