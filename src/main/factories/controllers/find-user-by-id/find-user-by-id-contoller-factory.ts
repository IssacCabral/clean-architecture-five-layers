import { IController } from "../../../../presentation/protocols"
import { FindUserByIdController } from "../../../../presentation/controllers/find-user-by-id/find-user-by-id-controller"
import { makeDbFindUserById } from "../../usecases/find-user-by-id/db-find-user-by-id-factory"

export const makeFindUserByIdController = (): IController => {
  const controller = new FindUserByIdController(
    makeDbFindUserById()
  )
  return controller
}