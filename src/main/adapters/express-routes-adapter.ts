import {Request, Response} from 'express'
import { HttpRequest, HttpResponse, IController } from '../../presentation/protocols';

export class ExpressAdapter{
  static create(controller: IController){
    return async function(request: Request, response: Response){
      const httpRequest: HttpRequest = {
        body: request.body,
        params: request.params
      }

      const httpResponse: HttpResponse = await controller.handle(httpRequest)
      return response.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}