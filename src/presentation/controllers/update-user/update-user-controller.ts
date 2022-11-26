import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { IUpdateUser } from "@domain/usecases/update-user"
import { IValidation } from "../../protocols"
import { IFindUserById } from "@domain/usecases/find-user-by-id"
import { serverError, ok, badRequest, notFound } from "../../helpers/http-helpers"
import { NotFoundError } from "../../errors/not-found-error"

export class UpdateUserController implements IController {
  constructor(
    private readonly updateUser: IUpdateUser,
    private readonly findUserById: IFindUserById,
    private readonly validation: IValidation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) return badRequest(error)

      const { name, email, cpf, password } = httpRequest.body
      const { id } = httpRequest.params

      const userById = await this.findUserById.find(id)
      if (!userById) return notFound(new NotFoundError("User"))

      const updateUserResult = await this.updateUser.update(userById, { name, email, cpf, password })
      if (updateUserResult instanceof Error) {
        return badRequest(updateUserResult)
      }

      return ok({ updateUserResult })
    } catch (error) {
      return serverError(error)
    }
  }
}
