export interface PurchaseOrderResponse {
  orderNumber: string
  fuelType: string
  paymentType: string
  deliveryType: string
  totalPrice: Number
  qtdLiters: Number
  deliveryDate: Date
  createDate: Date
  status: String
  fuelStationId: Number
}
