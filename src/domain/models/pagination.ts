export interface IPagination<T>{
  page: number
  perPage: number
  data: T[]
}