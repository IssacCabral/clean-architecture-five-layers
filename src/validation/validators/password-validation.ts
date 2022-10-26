import { InvalidParamError } from '../../presentation/errors/invalid-param-error'
import { IValidation } from '../../presentation/protocols'

export class PasswordValidation implements IValidation {
  constructor (
    private readonly fieldName: string
  ) { }

  validate (input: any): Error | null {
    // VALIDATION FOR PASSWORD
    if (!input[this.fieldName]) { return null }
    const password: string = input[this.fieldName]
    const isValid = password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`])\S{8,99}$/g)
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
    return null
  }
}
