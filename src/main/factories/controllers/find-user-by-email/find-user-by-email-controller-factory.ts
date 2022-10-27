import { IController } from "../../../../presentation/protocols";
import { FindUserByEmailController } from "../../../../presentation/controllers/find-user-by-email/find-user-by-email-controller";
import { makeDbFindUserByEmail } from "../../usecases/find-user-by-email/db-find-user-by-email-factory";

export const makeFindUserByEmailController = (): IController => {
  const controller = new FindUserByEmailController(
    makeDbFindUserByEmail()
  )
  return controller
}