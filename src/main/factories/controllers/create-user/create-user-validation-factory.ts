import validator from 'validator'
import { IValidation } from "../../../../presentation/protocols/validation";
import { MissingParamError } from "../../../../presentation/errors/missing-param-error";
import { InvalidParamError } from "../../../../presentation/errors/invalid-param-error";

class CreateUserValidator implements IValidation{
  validate(input: any): Error | null {
    const mandatoryData = ['name', 'cpf', 'email', 'password']
    const paramErrors: Array<string> = []

    for(const field of mandatoryData){
      if(!input[field]){
        paramErrors.push(field)
      }
    }
    
    if(paramErrors.length > 0) return new MissingParamError(paramErrors)
    
    const {cpf, email, password} = input
    
    const isEmailValid = validator.isEmail(email)
    if(!isEmailValid) return new InvalidParamError('email')

    const isValidPassword = password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`])\S{8,99}$/g)
    if(!isValidPassword) return new InvalidParamError('password')

    const isValidCpf = cpf.match(/^\d{3}.\d{3}.\d{3}-\d{2}$/)
    if(!isValidCpf) return new InvalidParamError('cpf')

    return null
  }

}

export const makeCreateUserValidation = (): IValidation => {
  return new CreateUserValidator()
}