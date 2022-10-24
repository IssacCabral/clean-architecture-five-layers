import { IUserType } from "./types/user-type";
import { BaseEntity } from "./base-entity";

export class User extends BaseEntity<IUserType>{
  constructor(props: IUserType){
    super(props)
  }
}