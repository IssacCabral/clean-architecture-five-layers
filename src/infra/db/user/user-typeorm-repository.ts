import dataSource from "../typeorm/data-source";
import { User } from "../typeorm/entities/user";
import { ICreateUserRepository } from "../../../data/protocols/db/create-user-repository";
import { IFindUserByCpfRepository } from "../../../data/protocols/db/find-user-by-cpf-repository";
import { IFindUserByEmailRepository } from "../../../data/protocols/db/find-user-by-email-repository";
import { UserModel } from "../../../domain/models/user";
import { CreateUserParams } from "../../../domain/types/create-user-params";
import { userEntityAdapter } from "./adapters/user-entity-adapter";

export class UserTypeOrmRepository implements
    ICreateUserRepository,
    IFindUserByCpfRepository,
    IFindUserByEmailRepository {
  
  async createUser(userParams: CreateUserParams): Promise<UserModel> {
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.save({ ...userParams.props });
    await usersRepository.save(user);

    const userAdapted = userEntityAdapter(user);
    
    await connection.destroy()

    return userAdapted;
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.findOneBy({email})
    if(!user) return null
    const userAdapted = userEntityAdapter(user)
    return userAdapted
  }

  async findByCpf(cpf: string): Promise<UserModel | null> {
    const connection = await dataSource.initialize()
    const usersRepository = connection.getRepository(User)

    const user = await usersRepository.findOneBy({cpf})
    const userAdapted = userEntityAdapter(user)
    return userAdapted
  }
}
