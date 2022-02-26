import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

export const makeCreateSupplierPricesValidationFactory = (): ValidationComposite => {
  const requiredFields = [
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
