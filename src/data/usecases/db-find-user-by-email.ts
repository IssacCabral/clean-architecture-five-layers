import { UserModel } from "../../domain/models/user";
import { IFindUserByEmailRepository } from "../protocols/db/find-user-by-email-repository";
import { IFindUserByEmail } from "../../domain/usecases/find-user-by-email";

export class DbFindUserByEmail implements IFindUserByEmail{
  constructor(
    private readonly findUserByEmailRepository: IFindUserByEmailRepository
  ) {}

  async find(email: string): Promise<UserModel | null> {
    const user = await this.findUserByEmailRepository.findByEmail(email)
    return user 
  }
}