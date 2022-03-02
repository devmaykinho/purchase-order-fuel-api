import { RequiredUrlParamValidation, ValidationComposite } from '../../../domain/validations'

export const makeFindPurchaseOrderByFilterValidationFactory = (): ValidationComposite => {
  const validations = [
    new RequiredUrlParamValidation()
  ]

  return new ValidationComposite(validations)
}
