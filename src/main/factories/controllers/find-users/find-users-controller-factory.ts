import { IController } from "../../../../presentation/protocols";
import { FindUsersController } from "../../../../presentation/controllers/find-users/find-users-controller";
import { makeDbFindUsers } from "../../usecases/find-users/db-find-users-factory";

export const makeFindUsersController = (): IController => {
  const controller = new FindUsersController(
    makeDbFindUsers()
  )
  return controller
}