import { Pagination } from "../../domain/models/pagination";
import { UserModel } from "../../domain/models/user";
import { PaginateOptions } from "../../domain/types/paginate-options";
import { IFindUsers } from "../../domain/usecases/find-users";
import { IFindUsersRepository } from "../protocols/db/find-users-repository";

export class DbFindUsers implements IFindUsers{
  constructor(
    private readonly findUsersRepository: IFindUsersRepository
  ) {}

  async find(pagination: PaginateOptions): Promise<Pagination<UserModel>> {
    const users = await this.findUsersRepository.findUsers(pagination)
    return users
  }

}