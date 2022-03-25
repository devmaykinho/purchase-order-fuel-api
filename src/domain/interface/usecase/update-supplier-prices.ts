import { SupplierPricesModel } from '../../models'

export interface UpdateSupplierPrices {
  run: (supplierPrices: SupplierPricesModel) => Promise<void>
}
