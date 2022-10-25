export abstract class BaseEntity<T>{
  id: number
  createdAt: Date
  updatedAt: Date
  
  constructor(public props: T){}
}