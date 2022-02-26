import { SupplierPricesModel } from '../../models'

export interface CreateSupplierPrices {
  run: (supplierPrices: SupplierPricesModel) => Promise<void>
}
