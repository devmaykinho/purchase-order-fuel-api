import { SupplierModel } from '../../models/supplier'

export interface CreateSupplierRepository {
  run: (supplier: SupplierModel) => Promise<void>
}
