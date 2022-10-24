import { IUserType } from "./types/user-type";
import { BaseEntity } from "./base-entity";

export class UserModel extends BaseEntity<IUserType>{
  constructor(props: IUserType){
    super(props)
  }
}