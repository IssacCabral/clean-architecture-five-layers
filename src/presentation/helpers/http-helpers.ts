import { ServerError } from "../errors"
import { HttpResponse } from "../protocols"

export const serverError = (error: Error): HttpResponse => {
  const errorStack = error.stack
  return {
    statusCode: 500,
    body: new ServerError(errorStack)
  }
}

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

export const created = (data: any): HttpResponse => {
  return {
    statusCode: 201,
    body: data
  }
}