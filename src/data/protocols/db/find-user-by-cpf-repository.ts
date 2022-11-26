import { UserModel } from "@domain/models/user"

export interface IFindUserByCpfRepository {
  findByCpf(cpf: string): Promise<UserModel | null>
}
