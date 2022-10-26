import {
  IController,
  ICreateUser,
  IValidation,
  HttpRequest,
  HttpResponse,
} from "./create-user-controller-protocols";
import { badRequest, created, serverError } from '../../helpers/http-helpers'

export class CreateUserController implements IController {
  constructor(
    private readonly createUser: ICreateUser,
    private readonly validation: IValidation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if (error) {return badRequest(error)}

      const createUserResult = await this.createUser.create(httpRequest.body)

      if(createUserResult instanceof Error){
        return badRequest(createUserResult)
      }
      
      return created(createUserResult)
    } catch (error) {
      return serverError(error)
    }
  }
}
