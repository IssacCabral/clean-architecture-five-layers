import { UserModel } from "../../../../domain/models/user";

export const userEntityAdapter = (user: any): UserModel => {
  const {id, createdAt, updatedAt, ...props} = user
  return {id, props, createdAt, updatedAt}
}