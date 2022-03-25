export type FuelType = 'GASOLINA' | 'ETANOL'
export type PaymentType = 'ANTECIPADO' | 'AVISTA' | '7DIAS' | '10DIAS'
export type DeliveryType = 'RETIRADA' | 'COLOCADO'

export interface SupplierPricesModel {
  id?: number
  fuelType: FuelType
  paymentType: PaymentType
  deliveryType: DeliveryType
  purchasePrice: Number
  salesPrice: Number
  supplierId: Number
}
