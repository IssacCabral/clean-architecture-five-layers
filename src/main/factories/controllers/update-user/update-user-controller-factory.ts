import { IController } from "../../../../presentation/protocols";
import { UpdateUserController } from "../../../../presentation/controllers/update-user/update-user-controller";
import { makeDbUpdateUser } from "../../usecases/update-user/db-update-user-factory";
import { makeUpdateUserValidation } from "./update-user-validation-factory";
import { makeDbFindUserById } from "../../usecases/find-user-by-id/db-find-user-by-id-factory";

export const makeUpdateUserController = (): IController => {
  const controller = new UpdateUserController(
    makeDbUpdateUser(),
    makeDbFindUserById(),
    makeUpdateUserValidation(),
  )

  return controller
}