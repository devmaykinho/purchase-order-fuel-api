import { DeliveryType, FuelType, PaymentType } from './supplier-prices'

export interface CustomPriceModel {
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  price: Number
  isActive: 'SIM' | 'NÃO'
  fuelStationId: Number
  createDate: string
}
