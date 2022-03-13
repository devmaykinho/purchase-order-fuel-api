import { mock, MockProxy } from 'jest-mock-extended'
import { FindActiveCustomPriceRepository, FindSupplierPricesByFilterRepository, FindHomePrice, Validation } from '../interface'
import { FindHomePriceUseCase } from './find-home-price.usecase'
import { newCustomPriceResponse } from '../../utils/fixtures'
import { HomePriceResponse } from '../response'

const customPrice = newCustomPriceResponse({ price: 10.00 })

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

    findActiveCustomPriceRepository.run.mockImplementation(async () => { return Promise.resolve([customPrice]) })
    const result = await findHomePriceUsecase.run(fuelStationId)

    expect(findActiveCustomPriceRepository.run).toHaveBeenCalledWith(fuelStationId)
    expect(result).toEqual([homePrice])
  })
})
