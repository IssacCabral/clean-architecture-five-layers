import { Pagination } from "../../../domain/models/pagination";
import { UserModel } from "../../../domain/models/user";
import { PaginateOptions } from "../../../domain/types/paginate-options";

export interface IFindUsersRepository{
  findUsers(pagination: PaginateOptions): Promise<Pagination<UserModel>>
}