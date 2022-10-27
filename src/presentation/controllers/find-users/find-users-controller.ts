import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { IFindUsers } from "../../../domain/usecases/find-users";
import { serverError, ok } from "../../helpers/http-helpers";

export class FindUsersController implements IController{
  constructor(
    private readonly findUsers: IFindUsers
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try{
      const {page, perPage} = httpRequest.query
      const users = await this.findUsers.find({page, perPage})

      return ok({users})
    } catch(error){
      return serverError(error)
    }
  }

}