import { DeliveryType, FuelType, PaymentType } from './supplier-prices'

export interface OrderPriceFilterModel {
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  fuelStationId: Number
}
