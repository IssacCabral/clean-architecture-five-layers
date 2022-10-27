import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { IFindUserByEmail } from "../../../domain/usecases/find-user-by-email";
import { notFound, ok, serverError } from "../../helpers/http-helpers";
import { NotFoundError } from "../../errors/not-found-error";

export class FindUserByEmailController implements IController{
  constructor(
    private readonly findUserByEmail: IFindUserByEmail
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try{
      const {email} = httpRequest.params

      const findUserByEmailResult = await this.findUserByEmail.find(email)
      if(!findUserByEmailResult){
        return notFound(new NotFoundError('User'))
      }

      const userWithoutPassword = {...findUserByEmailResult, password: undefined as any}

      return ok({userWithoutPassword})
    } catch(error){
      return serverError(error)
    }
  } 

}