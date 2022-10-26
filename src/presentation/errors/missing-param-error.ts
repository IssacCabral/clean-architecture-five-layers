export class MissingParamError extends Error{
  constructor(paramName: String[]){
    super(`Missing params: ${paramName}`)
    this.name = 'MissingParamError'
  }
}