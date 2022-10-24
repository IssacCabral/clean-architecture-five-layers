import { UserModel } from "../models/user"
import { IPagination } from "../models/pagination"

export type PaginateOptions = {
  page: number
  perPage: number
}

export interface IFindUsers{
  find(pagination: PaginateOptions): Promise<IPagination<UserModel>>
}