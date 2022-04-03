import { PurcharseOrderValidations } from '../../../domain/interface'
import {
  RequiredFieldValidation,
  PurcharseOrderValidation
} from '../../../domain/validations'

import { FindFuelStationByIdRepositoryPg, GetConfigRepositoryPg } from '../../../infra/repositories/postgres/repository'

export const makeCreatePurchaseOrderValidationFactory = (): PurcharseOrderValidations => {
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
    'shippingDriverCnh',
    'shippingCnpj',
    'shippingDriverName',
    'shippingName',
    'shippingPlateNumber'
  ]

  return new PurcharseOrderValidation(
    new RequiredFieldValidation(requiredFields),
    new RequiredFieldValidation(shippingCompanyRequiredFields),
    new FindFuelStationByIdRepositoryPg(),
    new GetConfigRepositoryPg()
  )
}
