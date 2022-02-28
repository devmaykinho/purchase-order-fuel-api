import { mock, MockProxy } from 'jest-mock-extended'
import { FindActiveCustomPriceRepository, FindSupplierPricesByFilterRepository, FindHomePrice, FindSupplierPricesFilter, Validation } from '../interface'
import { FindHomePriceUseCase } from './find-home-price.usecase'
import { newCustomPrice, newSupplierPrices } from '../../utils/fixtures'
import { HomePriceResponse, SupplierPricesResponse } from '../response'

const customPrice = newCustomPrice({ price: 10.00 })
const suplierPrice = newSupplierPrices()
const supplierPriceResponse: SupplierPricesResponse = { id: 1, ...suplierPrice }

describe('FindHomePriceUsecase - Unit test', () => {
  let findActiveCustomPriceRepository: MockProxy<FindActiveCustomPriceRepository>
  let findSupplierPriceByFilter: MockProxy<FindSupplierPricesByFilterRepository>
  let requeridFieldValidation: MockProxy<Validation>
  let findHomePriceUsecase: FindHomePrice

  const fuelStationId = 1

  beforeAll(() => {
    findActiveCustomPriceRepository = mock()
    findSupplierPriceByFilter = mock()
    requeridFieldValidation = mock()
    findHomePriceUsecase = new FindHomePriceUseCase(
      requeridFieldValidation,
      findActiveCustomPriceRepository,
      findSupplierPriceByFilter
    )
  })

  it('Should call validation with correct values', async () => {
    await findHomePriceUsecase.run(fuelStationId)

    expect(requeridFieldValidation.validate).toHaveBeenCalledWith(fuelStationId)
  })
  it('Should return a custom price', async () => {
    const homePrice: HomePriceResponse = {
      fuelType: customPrice.fuelType,
      paymentType: customPrice.paymentType,
      deliveryType: customPrice.deliveryType,
      price: customPrice.price
    }

    findActiveCustomPriceRepository.run.mockImplementation(async () => { return Promise.resolve(customPrice) })
    const result = await findHomePriceUsecase.run(fuelStationId)

    expect(findActiveCustomPriceRepository.run).toHaveBeenCalledWith(fuelStationId)
    expect(result).toEqual(homePrice)
  })

  it('Should return a suplier price ANTECIPADO', async () => {
    const homePrice: HomePriceResponse = {
      fuelType: suplierPrice.fuelType,
      paymentType: suplierPrice.paymentType,
      deliveryType: suplierPrice.deliveryType,
      price: suplierPrice.salesPrice
    }

    findActiveCustomPriceRepository.run.mockImplementation(async () => { return Promise.resolve(undefined) })
    findSupplierPriceByFilter.run.mockImplementation(async () => { return Promise.resolve(supplierPriceResponse) })

    const result = await findHomePriceUsecase.run(fuelStationId)
    const supplierPriceFilter: FindSupplierPricesFilter = {
      fuelType: 'ETANOL',
      paymentType: 'ANTECIPADO',
      deliveryType: 'RETIRADA'
    }

    expect(findSupplierPriceByFilter.run).toHaveBeenCalledWith(supplierPriceFilter)
    expect(result).toEqual(homePrice)
  })
})
