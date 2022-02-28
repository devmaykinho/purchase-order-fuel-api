import { IsActive } from '../interface/types'
import { DeliveryType, FuelType, PaymentType } from './supplier-prices'

export interface CustomPriceModel {
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  price: Number
  isActive?: IsActive
  fuelStationId: Number
  createDate: string
}
