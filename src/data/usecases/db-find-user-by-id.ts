import { UserModel } from "../../domain/models/user";
import { IFindUserById } from "../../domain/usecases/find-user-by-id";
import { IFindUserByIdRepository } from "../protocols/db/find-user-by-id-repository";

export class DbFindUserById implements IFindUserById{
  constructor(
    private readonly findUserByIdRepository: IFindUserByIdRepository
  ) {}

  async find(id: number): Promise<UserModel | null> {
    const user = await this.findUserByIdRepository.findById(id)
    return user
  }

}