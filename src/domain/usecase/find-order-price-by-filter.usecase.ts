import { FindActiveCustomPriceByfilterRepository, FindSupplierPricesByFilterRepository, FindSupplierPricesFilter, Validation } from '../interface'
import { FindOrderPriceByFilter } from '../interface/usecase/find-order-price-by-filter'
import { OrderPriceFilterModel } from '../models'
import { OrderPriceFilterResponse } from '../response'

export class FindOrderPriceByFilterUseCase implements FindOrderPriceByFilter {
  constructor (
    private readonly requeridFieldValidation: Validation,
    private readonly findActiveCustomPriceRepository: FindActiveCustomPriceByfilterRepository,
    private readonly findSupplierPriceByFilter: FindSupplierPricesByFilterRepository
  ) {}

  run = async (filter: OrderPriceFilterModel): Promise<OrderPriceFilterResponse | undefined> => {
    this.requeridFieldValidation.validate(filter)
    const { fuelStationId, fuelType } = filter
    const customPrice = await this.findActiveCustomPriceRepository.run({ fuelStationId, fuelType })

    if (customPrice) {
      const orderPrice: OrderPriceFilterResponse = {
        price: customPrice.price
      }
      return orderPrice
    }

    const supplierPriceFilter: FindSupplierPricesFilter = {
      fuelType: filter.fuelType,
      paymentType: filter.paymentType,
      deliveryType: filter.deliveryType
    }

    const supplierPrice = await this.findSupplierPriceByFilter.run(supplierPriceFilter)

    if (supplierPrice) {
      const orderPrice: OrderPriceFilterResponse = {
        price: supplierPrice.salesPrice
      }
      return orderPrice
    }
  }
}
