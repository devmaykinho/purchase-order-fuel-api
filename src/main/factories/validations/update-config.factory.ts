import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

export const makeUpdateConfigValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'timeLimitPurchase',
    'blockOrders'
  ]

  const validations = [
    new RequiredFieldValidation(requiredFields)
  ]

  return new ValidationComposite(validations)
}
