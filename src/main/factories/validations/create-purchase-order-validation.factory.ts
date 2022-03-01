import {
  RequiredFieldValidation,
  PurcharseOrderValidation,
  ValidationComposite
} from '../../../domain/validations'

import { FindFuelStationByEmailRepositoryPg } from '../../../infra/repositories/postgres/repository'

export const makeCreatePurchaseOrderValidationFactory = (): ValidationComposite => {
  const requiredFields = [
    'fuelType',
    'paymentType',
    'deliveryType',
    'totalPrice',
    'qtdLiters',
    'fuelStationId',
    'deliveryDate'
  ]

  const shippingCompanyRequiredFields = [
    'name',
    'cnpj',
    'plateNumber',
    'driverName',
    'cnh'
  ]

  const purcharseOrderValidation = new PurcharseOrderValidation(
    new RequiredFieldValidation(requiredFields),
    new RequiredFieldValidation(shippingCompanyRequiredFields),
    new FindFuelStationByEmailRepositoryPg()
  )

  const validations = [
    purcharseOrderValidation
  ]
  return new ValidationComposite(validations)
}
