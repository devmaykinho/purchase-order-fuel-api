import { SupplierModel } from '../../models'

export interface UpdateSupplierRepository {
  run: (supplier: SupplierModel) => Promise<void>
}
