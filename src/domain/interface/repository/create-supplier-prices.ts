import { SupplierPricesModel } from '../../models'

export interface CreateSupplierPricesRepository {
  run: (supplierPrices: SupplierPricesModel) => Promise<void>
}
