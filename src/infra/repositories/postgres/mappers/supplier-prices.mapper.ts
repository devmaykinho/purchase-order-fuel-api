import { SupplierPricesResponse } from '../../../../domain/response'
import { SupplierPricesEntity } from '../entities'

export const supplierPricesMapper = (supplierPricesEntity: SupplierPricesEntity | undefined): SupplierPricesResponse | undefined => {
  if (!supplierPricesEntity) {
    return undefined
  }

  return {
    id: supplierPricesEntity.id,
    fuelType: supplierPricesEntity.fuelType,
    paymentType: supplierPricesEntity.paymentType,
    deliveryType: supplierPricesEntity.deliveryType,
    purchasePrice: supplierPricesEntity.purchasePrice,
    salesPrice: supplierPricesEntity.salesPrice,
    supplierId: supplierPricesEntity.supplierId
  }
}
