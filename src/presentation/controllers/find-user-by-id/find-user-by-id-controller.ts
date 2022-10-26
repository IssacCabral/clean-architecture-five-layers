import { IFindUserById } from "../../../domain/usecases/find-user-by-id";
import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { serverError, notFound, ok } from "../../helpers/http-helpers";
import { NotFoundError } from "../../errors/not-found-error";

export class FindUserByIdController implements IController{
  constructor(
    private readonly findUserById: IFindUserById
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try{
      const {id} = httpRequest.params

      const findUserByIdResult = await this.findUserById.find(id)
      if(!findUserByIdResult){
        return notFound(new NotFoundError('User'))
      }

      const userWithoutPassword = {...findUserByIdResult, password: undefined as any}

      return ok({userWithoutPassword})
    } catch(error){
      return serverError(error)
    }
  }

}