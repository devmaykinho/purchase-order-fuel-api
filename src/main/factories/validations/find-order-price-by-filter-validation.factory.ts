import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

export const makeFindOrderPriceByFilterValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'fuelType',
    'paymentType',
    'deliveryType',
    'fuelStationId'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields)
  ]

  return new ValidationComposite(validations)
}
