export interface PurchaseOrderResponse {
  id: number
  fuelType: string
  paymentType: string
  deliveryType: string
  totalPrice: Number
  status: String
  qtdLiters: Number
  deliveryDate: string
  createDate: string
  fuelStationId: Number
  shippingName?: string
  shippingCnpj?: string
  shippingPlateNumber?: string
  shippingDriverName?: string
  shippingDriverCnh?: string
}
