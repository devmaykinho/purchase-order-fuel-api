import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

export const makeSigninValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'email',
    'password'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields)
  ]

  return new ValidationComposite(validations)
}
