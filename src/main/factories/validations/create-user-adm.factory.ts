import { RequiredFieldValidation, ComparePasswordValidation, ValidationComposite, HasNetworkValidation } from '../../../domain/validations'

export const makeCreateUserAdmValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'name',
    'email',
    'phoneNumber',
    'password',
    'passwordConfirmation'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields),
    new ComparePasswordValidation(),
    new HasNetworkValidation()
  ]

  return new ValidationComposite(validations)
}
