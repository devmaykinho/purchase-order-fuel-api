import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

export const makeUpdateSupplierPricesValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'id',
    'fuelType',
    'paymentType',
    'deliveryType',
    'purchasePrice',
    'salesPrice',
    'supplierId'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields)
  ]

  return new ValidationComposite(validations)
}
