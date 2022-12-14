import dataSource from "../typeorm/data-source"
import { Repository } from "typeorm"
import { User } from "../typeorm/entities/user"
import { ICreateUserRepository } from "../../../data/protocols/db/create-user-repository"
import { IFindUserByCpfRepository } from "../../../data/protocols/db/find-user-by-cpf-repository"
import { IFindUserByEmailRepository } from "../../../data/protocols/db/find-user-by-email-repository"
import { IFindUserByIdRepository } from "../../../data/protocols/db/find-user-by-id-repository"
import { UserModel } from "@domain/models/user"
import { CreateUserParams } from "@domain/types/create-user-params"
import { IDeleteUserRepository } from "../../../data/protocols/db/delete-user-repository"
import { IFindUsersRepository } from "../../../data/protocols/db/find-users-repository"
import { Pagination } from "@domain/models/pagination"
import { PaginateOptions } from "@domain/types/paginate-options"
import { IUpdateUserRepository } from "../../../data/protocols/db/update-user-repository"
import { UpdateUserParams } from "@domain/types/update-user-params"

export class UserTypeOrmRepository
  implements
    ICreateUserRepository,
    IFindUserByCpfRepository,
    IFindUserByEmailRepository,
    IFindUserByIdRepository,
    IFindUsersRepository,
    IUpdateUserRepository,
    IDeleteUserRepository
{
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = dataSource.getRepository(User)
  }

  async createUser(userParams: CreateUserParams): Promise<UserModel> {
    const user = this.usersRepository.create(userParams)
    await this.usersRepository.save(user)

    const userWithoutPassword: User = { ...user, password: undefined as any }

    return userWithoutPassword
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    const user = await this.usersRepository.findOneBy({ email })
    return user
  }

  async findByCpf(cpf: string): Promise<UserModel | null> {
    const user = await this.usersRepository.findOneBy({ cpf })
    return user
  }

  async findById(id: number): Promise<UserModel | null> {
    const user = await this.usersRepository.findOneBy({ id })
    return user
  }

  async findUsers(pagination: PaginateOptions): Promise<Pagination<UserModel>> {
    const { page, perPage } = pagination

    const [users, count] = await this.usersRepository.findAndCount({
      take: perPage || 4,
      skip: (page - 1) * perPage || 0
    })

    return {
      page,
      perPage,
      data: users
    }
  }

  async updateUser(id: number, params: UpdateUserParams): Promise<UserModel> {
    const findUser = await this.usersRepository.findOne({ where: { id } })

    await this.usersRepository.update({ id }, { ...params })

    const updatedUser = this.usersRepository.create({ ...findUser, ...params })
    const user: User = { ...updatedUser, password: undefined as any }

    return user
  }

  async deleteUser(id: number): Promise<boolean> {
    const user = await this.usersRepository.findOneBy({ id })
    const exclusionResult = await this.usersRepository.delete(user!)
    if (exclusionResult) return true
    return false
  }
}
