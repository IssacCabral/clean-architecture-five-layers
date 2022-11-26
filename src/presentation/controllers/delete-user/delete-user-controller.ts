import { HttpRequest, HttpResponse, IController } from "../../protocols"
import { IDeleteUser } from "@domain/usecases/delete-user"
import { notFound, serverError, ok } from "../../helpers/http-helpers"

export class DeleteUserController implements IController {
  constructor(private readonly deleteUser: IDeleteUser) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const deleteUserResult = await this.deleteUser.delete(id)
      if (deleteUserResult instanceof Error) {
        return notFound(deleteUserResult)
      }

      return ok({ message: `User ${deleteUserResult.email} deleted with success` })
    } catch (error) {
      return serverError(error)
    }
  }
}
