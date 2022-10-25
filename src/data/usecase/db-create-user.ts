import { UserModel } from "../../domain/models/user";
import { CreateUserParams } from "../../domain/types/create-user-params";
import { ICreateUser } from "../../domain/usecase/create-user";
import { IHasher } from "../protocols/cryptography/hasher";
import { ICreateUserRepository } from "../protocols/db/create-user-repository";
import { IFindUserByCpfRepository } from "../protocols/db/find-user-by-cpf-repository";
import { IFindUserByEmailRepository } from "../protocols/db/find-user-by-email-repository";

export class DbCreateUser implements ICreateUser{
  constructor(
    private readonly createUserRepository: ICreateUserRepository,
    private readonly findUserByCpfRepository: IFindUserByCpfRepository,
    private readonly findUserByEmailRepository: IFindUserByEmailRepository,
    private readonly hasher: IHasher
  ) {}

  async create(user: CreateUserParams): Promise<UserModel | Error> {
    const userWithCpf = await this.findUserByCpfRepository.findByCpf(user.props.cpf)
    if(userWithCpf){
      return new Error('cpf already exists')
    }

    const userWithEmail = await this.findUserByEmailRepository.findByEmail(user.props.email)
    if(userWithEmail){
      return new Error('email already exists')
    }

    const hashedPassword = await this.hasher.hash(user.props.password)

    user.props.password = hashedPassword

    const createdUser = await this.createUserRepository.createUser({props: user.props})
    
    return createdUser
  }

}