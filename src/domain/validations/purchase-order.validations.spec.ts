import { MockProxy, mock } from 'jest-mock-extended'
import { FindFuelStationByEmailRepository, PurcharseOrderValidations, Validation } from '../interface'
import { PurcharseOrderValidation } from './purchase-order.validations'
import { newPurchaseOrder, newFuelStationResponse } from '../../utils/fixtures'
import { CustomError, MissingParamError } from '../../utils/error'
import { DeliveryType, FuelType, PaymentType } from '../interface/types'
import moment from 'moment'
import { ShippingCompanyModel } from '../models'

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

  it('Should return CustomError if fuel station is not approved', async () => {
    const purchaseOrder = newPurchaseOrder()
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Cadastro pendente de aprovação.'))
  })

  it('Should return CustomError if fuel type is invalid', async () => {
    const fuelType = 'INVALID FUEL TYPE' as FuelType
    const purchaseOrder = newPurchaseOrder({ fuelType })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Tipo de combustivel não permitido.'))
  })

  it('Should return CustomError if payment type is invalid', async () => {
    const paymentType = 'INVALID PAYMENT TYPE' as PaymentType
    const purchaseOrder = newPurchaseOrder({ paymentType })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Tipo de pagamento não permitido.'))
  })

  it('Should return CustomError if delivery type is invalid', async () => {
    const deliveryType = 'INVALID DELIVERY TYPE' as DeliveryType
    const purchaseOrder = newPurchaseOrder({ deliveryType })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Tipo de entrega não permitido.'))
  })

  it('Should return CustomError if delivery date is invalid', async () => {
    const curretDate = moment(new Date()).format('DD/MM/YYYY')
    const purchaseOrder = newPurchaseOrder({ deliveryDate: curretDate })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Não é possível fazer pedido para o mesmo dia.'))
  })

  it('Should return CustomError if qtdLiters is invalid', async () => {
    const purchaseOrder = newPurchaseOrder({ qtdLiters: 0 })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Quantidade de litros dever ser maior que zero.'))
  })

  it('Should return MissingParamError if delivery type is RETIRADA and shipping is not provided', async () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const shippingCompany = {} as ShippingCompanyModel
    const purchaseOrder = newPurchaseOrder({ deliveryType: 'RETIRADA', shippingCompany })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new MissingParamError('shippingCompany'))
  })
})
