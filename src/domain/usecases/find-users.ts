import { UserModel } from "../models/user"
import { IPagination } from "../models/pagination"
import { PaginateOptions } from "../types/paginate-options"

export interface IFindUsers{
  find(pagination: PaginateOptions): Promise<IPagination<UserModel>>
}