import { DbCreateUser } from "../../../../data/usecase/db-create-user";
import { ICreateUser } from "../../../../domain/usecase/create-user";
import { BcryptAdapter } from "../../../../infra/cryptography/bcrypt-adapter";
import { UserTypeOrmRepository } from "../../../../infra/db/user/user-typeorm-repository";

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