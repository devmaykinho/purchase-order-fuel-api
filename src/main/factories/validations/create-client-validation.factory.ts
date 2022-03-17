import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

export const makeClientValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'name',
    'email',
    'cnpj',
    'address',
    'phoneNumber',
    'city',
    'uf',
    'observation'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields)
  ]

  return new ValidationComposite(validations)
}
