export interface Pagination<T>{
  page: number
  perPage: number
  data: T[]
}