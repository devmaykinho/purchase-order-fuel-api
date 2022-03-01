import { MockProxy, mock } from 'jest-mock-extended'
import { FindFuelStationByEmailRepository, PurcharseOrderValidations, Validation } from '../interface'
import { PurcharseOrderValidation } from './purchase-order.validations'
import { newPurchaseOrder, newFuelStationResponse } from '../../utils/fixtures'
import { CustomError } from '../../utils/error'

const purchaseOrder = newPurchaseOrder()
const fuelStationResponse = newFuelStationResponse()

describe('PurchaseOrderValidation - Unit test', () => {
  let requiredFieldsValidation: MockProxy<Validation>
  let shippingCompanyValidation: MockProxy<Validation>
  let findFuelStationRepository: MockProxy<FindFuelStationByEmailRepository>
  let purcharseOrderValidation: PurcharseOrderValidations

  beforeAll(() => {
    requiredFieldsValidation = mock()
    shippingCompanyValidation = mock()
    findFuelStationRepository = mock()

    findFuelStationRepository.run.mockImplementationOnce(async () => Promise.resolve(fuelStationResponse))

    purcharseOrderValidation = new PurcharseOrderValidation(
      requiredFieldsValidation,
      shippingCompanyValidation,
      findFuelStationRepository
    )
  })

  it('Should return BadRequest if fuel station is not approved', async () => {
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Usuário pendente de aprovação'))
  })
})
