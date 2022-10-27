import validator from 'validator'
import { IValidation } from "../../../../presentation/protocols/validation";
import { MissingParamError } from "../../../../presentation/errors/missing-param-error";
import { InvalidParamError } from "../../../../presentation/errors/invalid-param-error";

class UpdateUserValidator implements IValidation{
  validate(input: any): Error | null {    
    const {cpf, email, password} = input
    
    if(email){
      const isEmailValid = validator.isEmail(email)
      if(!isEmailValid) return new InvalidParamError('email')
    }
    
    if(password){
      const isValidPassword = password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`])\S{8,99}$/g)
      if(!isValidPassword) return new InvalidParamError('password')
    }

    if(cpf){
      const isValidCpf = cpf.match(/^\d{3}.\d{3}.\d{3}-\d{2}$/)
      if(!isValidCpf) return new InvalidParamError('cpf')
    }

    return null
  }

}

export const makeUpdateUserValidation = (): IValidation => {
  return new UpdateUserValidator()
}