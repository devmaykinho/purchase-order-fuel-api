import { SupplierPricesModel, DeliveryType, PaymentType, FuelType } from '../../domain/models'

interface SupplierPricesFixtureProps {
  fuelType?: FuelType
  paymentType?: PaymentType
  deliveryType?: DeliveryType
  purchasePrice?: Number
  salesPrice?: Number
  supplierId?: number
}

export const newSupplierPrices = (props?: SupplierPricesFixtureProps): SupplierPricesModel => ({
  fuelType: props?.fuelType ?? 'GASOLINA',
  paymentType: props?.paymentType ?? 'ANTECIPADO',
  deliveryType: props?.deliveryType ?? 'RETIRADA',
  purchasePrice: props?.purchasePrice ?? 20.00,
  salesPrice: props?.salesPrice ?? 20.00,
  supplierId: props?.supplierId ?? 1
})
