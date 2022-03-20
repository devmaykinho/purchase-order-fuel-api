import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

export const makeSupplierValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'name',
    'cnpj',
    'email',
    'phoneNumber',
    'address',
    'city',
    'uf',
    'cep',
    'observation'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields)
  ]

  return new ValidationComposite(validations)
}
