import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

export const makeSupplierValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'name',
    'cnpj',
    'email',
    'telephone',
    'city',
    'district',
    'street',
    'supplierNumber',
    'cep'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields)
  ]

  return new ValidationComposite(validations)
}
