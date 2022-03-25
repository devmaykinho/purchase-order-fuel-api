import { SupplierPricesModel } from '../../models'

export interface UpdateSupplierPricesRepository {
  run: (supplierPrices: SupplierPricesModel) => Promise<void>
}
