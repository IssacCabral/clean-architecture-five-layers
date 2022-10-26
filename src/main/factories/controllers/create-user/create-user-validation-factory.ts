import { EmailValidatorAdapter } from "../../../../infra/validator/email-validator-adapter";
import { IValidation } from "../../../../presentation/protocols";
import { EmailValidation } from "../../../../validation/validators/email-validation";
import { PasswordValidation } from "../../../../validation/validators/password-validation";
import { RequiredFieldValidation } from "../../../../validation/validators/required-field-validation";
import { ValidationComposite } from "../../../../validation/validators/validation-composite";

export const makeCreateUserValidation = (): IValidation => {
  const validations: IValidation[] = []
  for (const field of ['name', 'cpf', 'email', 'password']){
    validations.push(new RequiredFieldValidation(field))
  }

  validations.push(new PasswordValidation('password'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}