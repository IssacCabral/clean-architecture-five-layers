export interface IDeleteUserRepository{
  deleteUser(id: number): Promise<boolean>
}