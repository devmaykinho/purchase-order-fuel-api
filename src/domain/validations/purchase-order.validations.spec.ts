import { MockProxy, mock } from 'jest-mock-extended'
import { FindFuelStationByIdRepository, GetConfigRepository, PurcharseOrderValidations, Validation } from '../interface'
import { PurcharseOrderValidation } from './purchase-order.validations'
import { newPurchaseOrder, newFuelStationResponse } from '../../utils/fixtures'
import { CustomError, MissingParamError } from '../../utils/error'
import { addDayOnDate, formatDate } from '../../utils/dates'
import { DeliveryType, FuelType, PaymentType } from '../interface/types'
import { ShippingCompanyModel } from '../models'

let requiredFieldsValidation: MockProxy<Validation>
let shippingCompanyValidation: MockProxy<Validation>
let findFuelStationRepository: MockProxy<FindFuelStationByIdRepository>
let getConfigRepository: MockProxy<GetConfigRepository>
let purcharseOrderValidation: PurcharseOrderValidations

const curretDate = addDayOnDate(new Date(), 1)
const dateFormated = formatDate(curretDate)

describe('PurchaseOrderValidation - Unit test', () => {
  beforeAll(() => {
    jest.clearAllMocks()
    requiredFieldsValidation = mock()
    shippingCompanyValidation = mock()
    findFuelStationRepository = mock()
    getConfigRepository = mock()

    const fuelStationResponse = newFuelStationResponse({ status: 'ACTIVE' })
    const timeLimit = new Date().getHours() + 1
    getConfigRepository.run.mockImplementationOnce(async () => Promise.resolve({ timeLimitPurchase: `${timeLimit}:00` }))
    findFuelStationRepository.run.mockImplementationOnce(async () => Promise.resolve(fuelStationResponse))

    purcharseOrderValidation = new PurcharseOrderValidation(
      requiredFieldsValidation,
      shippingCompanyValidation,
      findFuelStationRepository,
      getConfigRepository
    )
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
    const curretDate = formatDate(new Date())
    const purchaseOrder = newPurchaseOrder({ deliveryDate: curretDate })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Não é possível fazer pedido para uma data anterior ou igual a atual.'))
  })

  it('Should return CustomError if qtdLiters is invalid', async () => {
    const purchaseOrder = newPurchaseOrder({ qtdLiters: 0, deliveryDate: dateFormated })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Quantidade de litros dever ser maior que zero.'))
  })

  it('Should return MissingParamError if delivery type is RETIRADA and shipping is not provided', async () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const shippingCompany = {} as ShippingCompanyModel
    const purchaseOrder = newPurchaseOrder({ deliveryType: 'RETIRADA', shippingCompany })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new MissingParamError('shippingCompany'))
  })
})

describe('PurchaseOrderValidation Fuel Station peding - Unit test', () => {
  beforeAll(() => {
    jest.clearAllMocks()
    requiredFieldsValidation = mock()
    shippingCompanyValidation = mock()
    findFuelStationRepository = mock()
    getConfigRepository = mock()

    const fuelStationResponse = newFuelStationResponse()
    const timeLimit = new Date().getHours() + 1
    getConfigRepository.run.mockImplementationOnce(async () => Promise.resolve({ timeLimitPurchase: `${timeLimit}:00` }))
    findFuelStationRepository.run.mockImplementationOnce(async () => Promise.resolve(fuelStationResponse))

    purcharseOrderValidation = new PurcharseOrderValidation(
      requiredFieldsValidation,
      shippingCompanyValidation,
      findFuelStationRepository,
      getConfigRepository
    )
  })

  it('Should return CustomError if fuel station is not approved', async () => {
    const purchaseOrder = newPurchaseOrder({ deliveryDate: dateFormated })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Cadastro pendente de aprovação.'))
  })
})

describe('PurchaseOrderValidation Invalid Time Limit - Unit test', () => {
  beforeAll(() => {
    jest.clearAllMocks()
    requiredFieldsValidation = mock()
    shippingCompanyValidation = mock()
    findFuelStationRepository = mock()
    getConfigRepository = mock()

    const fuelStationResponse = newFuelStationResponse({ status: 'ACTIVE' })
    const timeLimit = new Date().getHours() - 1
    getConfigRepository.run.mockImplementationOnce(async () => Promise.resolve({ timeLimitPurchase: `${timeLimit}:00` }))
    findFuelStationRepository.run.mockImplementationOnce(async () => Promise.resolve(fuelStationResponse))

    purcharseOrderValidation = new PurcharseOrderValidation(
      requiredFieldsValidation,
      shippingCompanyValidation,
      findFuelStationRepository,
      getConfigRepository
    )
  })
  it('Should return CustomError if time limit is invalid', async () => {
    const purchaseOrder = newPurchaseOrder({ deliveryDate: dateFormated })
    await expect(purcharseOrderValidation.validate(purchaseOrder)).rejects.toThrow(new CustomError('Horario não permitido para realização do pedido.'))
  })
})
