import { FindHomePriceValidation, ValidationComposite } from '../../../domain/validations'

export const makeFindHomePriceValidationFactory = (): ValidationComposite => {
  const validations = [
    new FindHomePriceValidation()
  ]

  return new ValidationComposite(validations)
}
