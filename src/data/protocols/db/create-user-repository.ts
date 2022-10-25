import { UserModel } from '../../../domain/models/user';
import { CreateUserParams } from '../../../domain/types/create-user-params';

export interface ICreateUserRepository {
  createUser(userParams: CreateUserParams): Promise<UserModel>
}
