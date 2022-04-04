import { ShippingCompanyModel } from '../models'

export interface PurchaseOrderResponse {
  id: number
  fuelType: string
  paymentType: string
  deliveryType: string
  totalPrice: number
  status: String
  qtdLiters: number
  deliveryDate: string
  createDate: string
  fuelStationId: number
  shippingCompany?: ShippingCompanyModel
}
