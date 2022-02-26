import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

export const makeCreateCustomPriceValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'fuelType',
    'paymentType',
    'deliveryType',
    'price',
    'fuelStationId'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields)
  ]

  return new ValidationComposite(validations)
}
