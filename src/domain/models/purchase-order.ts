import { DeliveryType, FuelType, PaymentType, PurchaseOrderStatus } from '../interface/types'
import { ShippingCompanyModel } from './shipping-company'

export interface PurchaseOrderModel {
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  totalPrice: number
  qtdLiters: number
  status?: PurchaseOrderStatus
  fuelStationId: number
  deliveryDate: string
  createDate?: string
  shippingCompany?: ShippingCompanyModel
}
