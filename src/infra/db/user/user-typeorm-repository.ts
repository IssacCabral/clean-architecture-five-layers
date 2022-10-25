import dataSource from "../typeorm/data-source";
import { User } from "../typeorm/entities/user";
import { ICreateUserRepository } from "../../../data/protocols/db/create-user-repository";
import { UserModel } from "../../../domain/models/user";
import { CreateUserParams } from "../../../domain/types/create-user-params";
import { userEntityAdapter } from "./adapters/user-entity-adapter";

export class UserTypeOrmRepository implements ICreateUserRepository {
  async createUser(userParams: CreateUserParams): Promise<UserModel> {
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.save({...userParams.props})
    await usersRepository.save(user)

    const userAdapted = userEntityAdapter(user)

    return userAdapted
  }
}
