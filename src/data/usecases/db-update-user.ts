import { UserModel } from "../../domain/models/user";
import { UpdateUserParams } from "../../domain/types/update-user-params";
import { IUpdateUser } from "../../domain/usecases/update-user";
import { IUpdateUserRepository } from "../protocols/db/update-user-repository";
import { IFindUserByCpfRepository } from "../protocols/db/find-user-by-cpf-repository";
import { IFindUserByEmailRepository } from "../protocols/db/find-user-by-email-repository";
import { FieldInUseError } from "../../presentation/errors/field-in-use-error";

export class DbUpdateUser implements IUpdateUser{
  constructor(
    private readonly updateUserRepository: IUpdateUserRepository,
    private readonly findUserByEmailRepository: IFindUserByEmailRepository,
    private readonly findUserByCpfRepository: IFindUserByCpfRepository
  ) {}

  async update(user: UserModel, params: UpdateUserParams): Promise<UserModel | Error> {
    if(params.cpf){
      const userwithCpf = await this.findUserByCpfRepository.findByCpf(params.cpf)
      if(userwithCpf && userwithCpf.cpf !== user.cpf){
        return new FieldInUseError('cpf')
      }
    }

    if(params.email){
      const userWithEmail = await this.findUserByEmailRepository.findByEmail(params.email)
      if(userWithEmail && userWithEmail.email !== user.email){

        return new FieldInUseError('email')
      }
    }

    const updatedUser = await this.updateUserRepository.updateUser(
      user.id,
      params
    )

    return updatedUser
  }

}