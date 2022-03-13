import { FindActiveCustomPriceRepository, FindSupplierPricesByFilterRepository, Validation } from '../interface'
import { FindHomePrice } from '../interface/usecase/find-home-price'
import { FuelType } from '../models'
import { HomePriceResponse } from '../response'

export class FindHomePriceUseCase implements FindHomePrice {
  constructor (
    private readonly requeridFieldValidation: Validation,
    private readonly findActiveCustomPriceRepository: FindActiveCustomPriceRepository,
    private readonly findSupplierPriceByFilter: FindSupplierPricesByFilterRepository
  ) {}

  run = async (fuelStationId: Number): Promise<HomePriceResponse[] | undefined> => {
    this.requeridFieldValidation.validate(fuelStationId)
    const homePrice: HomePriceResponse[] = []
    const customPrice = await this.findActiveCustomPriceRepository.run(fuelStationId)
    const pricesType: string[] = []

    if (customPrice) {
      customPrice.forEach((price) => {
        pricesType.push(price.fuelType)
        homePrice.push(price)
      })
    }

    if (!pricesType.includes('ETANOL')) {
      const supplierPrice = await this.getSupllierPriceByFuelType('ETANOL')
      if (supplierPrice) {
        homePrice.push(supplierPrice)
      }
    }

    if (!pricesType.includes('GASOLINA')) {
      const supplierPrice = await this.getSupllierPriceByFuelType('GASOLINA')
      if (supplierPrice) {
        homePrice.push(supplierPrice)
      }
    }

    return homePrice
  }

  getSupllierPriceByFuelType = async (fuelType: FuelType): Promise<HomePriceResponse | undefined> => {
    const supplierPrice = await this.findSupplierPriceByFilter.run({
      fuelType: fuelType,
      paymentType: 'ANTECIPADO',
      deliveryType: 'RETIRADA'
    })

    if (supplierPrice) {
      return {
        deliveryType: supplierPrice.deliveryType,
        fuelType: supplierPrice.fuelType,
        paymentType: supplierPrice.deliveryType,
        price: supplierPrice.salesPrice
      }
    }
  }
}
