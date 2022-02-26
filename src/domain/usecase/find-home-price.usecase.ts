import { FindActiveCustomPriceRepository, FindSupplierPricesByFilterRepository, FindSupplierPricesFilter, Validation } from '../interface'
import { FindHomePrice } from '../interface/usecase/find-home-price'
import { HomePriceResponse } from '../response'

export class FindHomePriceUseCase implements FindHomePrice {
  constructor (
    private readonly requeridFieldValidation: Validation,
    private readonly findActiveCustomPriceRepository: FindActiveCustomPriceRepository,
    private readonly findSupplierPriceByFilter: FindSupplierPricesByFilterRepository
  ) {}

  run = async (fuelStationId: Number): Promise<HomePriceResponse | undefined> => {
    this.requeridFieldValidation.validate(fuelStationId)

    const customPrice = await this.findActiveCustomPriceRepository.run(fuelStationId)

    if (customPrice) {
      const homePrice: HomePriceResponse = {
        fuelType: customPrice.fuelType,
        paymentType: customPrice.paymentType,
        deliveryType: customPrice.deliveryType,
        price: customPrice.price
      }
      return homePrice
    }

    const supplierPriceFilter: FindSupplierPricesFilter = {
      fuelType: 'ETANOL',
      paymentType: 'ANTECIPADO',
      deliveryType: 'RETIRADA'
    }

    const supplierPrice = await this.findSupplierPriceByFilter.run(supplierPriceFilter)

    if (supplierPrice) {
      const homePrice: HomePriceResponse = {
        fuelType: supplierPrice.fuelType,
        paymentType: supplierPrice.paymentType,
        deliveryType: supplierPrice.deliveryType,
        price: supplierPrice.salesPrice
      }
      return homePrice
    }
  }
}
