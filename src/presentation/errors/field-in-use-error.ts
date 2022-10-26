export class FieldInUseError extends Error{
  constructor(paramName: string){
    super(`${paramName} is already in use`)
    this.name = 'FieldInUseError'
  }
}