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

      const {name, cpf, email, password} = httpRequest.body

      const createUserParams = {name, cpf, email, password}
      const createUserResult = await this.createUser.create({props: createUserParams})

      if(createUserResult instanceof Error){
        return badRequest(createUserResult)
      }

      const {...props} = createUserResult.props      
      const {props: undefined, ...base} = createUserResult
      
      const user = Object.assign({}, base, props)
      
      return created(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
