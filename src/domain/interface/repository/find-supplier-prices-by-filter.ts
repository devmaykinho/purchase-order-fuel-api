import { SupplierPricesResponse } from '../../response/supplier-prices.response'
import { DeliveryType, FuelType, PaymentType } from '../../models/supplier-prices'

export interface FindSupplierPricesFilter {
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  supplierId?: number
}

export interface FindSupplierPricesByFilterRepository {
  run: (filter: FindSupplierPricesFilter) => Promise<SupplierPricesResponse | undefined>
}
