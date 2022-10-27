import { UserModel } from "../models/user"
import { Pagination } from "../models/pagination"
import { PaginateOptions } from "../types/paginate-options"

export interface IFindUsers{
  find(pagination: PaginateOptions): Promise<Pagination<UserModel>>
}