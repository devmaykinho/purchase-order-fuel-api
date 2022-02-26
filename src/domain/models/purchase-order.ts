import { DeliveryType, FuelType, PaymentType, PurchaseOrderStatus } from '../interface/types'
import { ShippingCompanyModel } from './shipping-company'

export interface PurchaseOrderModel {
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  totalPrice: Number
  qtdLiters: Number
  status: PurchaseOrderStatus
  fuelStationId: Number
  deliveryDate: string
  createDate: string
  shippingCompany?: ShippingCompanyModel
}
