import { CreateUserController } from "../../../../presentation/controllers/create-user/create-user-controller";
import { IController } from "../../../../presentation/protocols";
import { makeDbCreateUser } from "../../usecase/create-user/db-create-user-factory";
import { makeCreateUserValidation } from "./create-user-validation-factory";

export const makeCreateUserController = (): IController => {
  const controller = new CreateUserController(
    makeDbCreateUser(),
    makeCreateUserValidation()
  )

  return controller
}