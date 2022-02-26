import { RequiredFieldValidation, ComparePasswordValidation, ValidationComposite, HasNetworkValidation } from '../../../domain/validations'

export const makeSignupValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'name',
    'cnpj',
    'email',
    'telephone',
    'city',
    'district',
    'street',
    'fuelStationNumber',
    'cep',
    'flag',
    'isNetwork',
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
