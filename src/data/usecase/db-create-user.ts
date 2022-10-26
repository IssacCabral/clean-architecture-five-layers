import { UserModel } from "../../domain/models/user";
import { CreateUserParams } from "../../domain/types/create-user-params";
import { ICreateUser } from "../../domain/usecase/create-user";
import { IHasher } from "../protocols/cryptography/hasher";
import { ICreateUserRepository } from "../protocols/db/create-user-repository";
import { IFindUserByCpfRepository } from "../protocols/db/find-user-by-cpf-repository";
import { IFindUserByEmailRepository } from "../protocols/db/find-user-by-email-repository";
import { FieldInUseError } from "../../presentation/errors/field-in-use-error";

export class DbCreateUser implements ICreateUser{
  constructor(
    private readonly createUserRepository: ICreateUserRepository,
    private readonly findUserByCpfRepository: IFindUserByCpfRepository,
    private readonly findUserByEmailRepository: IFindUserByEmailRepository,
    private readonly hasher: IHasher
  ) {}

  async create(user: CreateUserParams): Promise<UserModel | Error> {
    const userWithCpf = await this.findUserByCpfRepository.findByCpf(user.cpf)
    if(userWithCpf){
      return new FieldInUseError('cpf')
    }

    const userWithEmail = await this.findUserByEmailRepository.findByEmail(user.email)
    if(userWithEmail){
      return new FieldInUseError('email')
    }

    const hashedPassword = await this.hasher.hash(user.password)

    user.password = hashedPassword

    const createdUser = await this.createUserRepository.createUser(user)
    
    return createdUser
  }

}