import dataSource from "../typeorm/data-source";
import { User } from "../typeorm/entities/user";
import { ICreateUserRepository } from "../../../data/protocols/db/create-user-repository";
import { IFindUserByCpfRepository } from "../../../data/protocols/db/find-user-by-cpf-repository";
import { IFindUserByEmailRepository } from "../../../data/protocols/db/find-user-by-email-repository";
import { UserModel } from "../../../domain/models/user";
import { CreateUserParams } from "../../../domain/types/create-user-params";

export class UserTypeOrmRepository implements
    ICreateUserRepository,
    IFindUserByCpfRepository,
    IFindUserByEmailRepository {
  
  async createUser(userParams: CreateUserParams): Promise<UserModel> {
    const usersRepository = dataSource.getRepository(User)

    const user = usersRepository.create(userParams)
    await usersRepository.save(user)

    return user
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    const usersRepository = dataSource.getRepository(User)

    const user = await usersRepository.findOneBy({email})
    if(!user) {
      return null
    }

    return user
  }

  async findByCpf(cpf: string): Promise<UserModel | null> {
    const usersRepository = dataSource.getRepository(User)

    const user = await usersRepository.findOneBy({cpf})
    if(!user){
      return null
    }

    return user
  }
}
