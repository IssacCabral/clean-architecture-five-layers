import { IController } from "../../../../presentation/protocols"
import { DeleteUserController } from "../../../../presentation/controllers/delete-user-controller/delete-user-controller"
import { makeDbDeleteUser } from "../../usecases/delete-user/db-delete-user-factory"

export const makeDeleteUserController = (): IController => {
  const controller = new DeleteUserController(
    makeDbDeleteUser()
  )

  return controller
}