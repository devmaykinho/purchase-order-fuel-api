import { RequiredFieldValidation, ValidationComposite, HasNetworkValidation } from '../../../domain/validations'

export const makeUpdateUserAdmValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'name',
    'email',
    'phoneNumber'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields),
    new HasNetworkValidation()
  ]

  return new ValidationComposite(validations)
}
