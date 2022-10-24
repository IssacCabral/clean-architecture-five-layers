export abstract class BaseEntity<T>{
  id: string
  createdAt: Date
  updatedAt: Date
  
  constructor(public props: T){}
}