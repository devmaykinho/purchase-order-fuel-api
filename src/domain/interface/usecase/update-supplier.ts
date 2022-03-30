import { SupplierModel } from '../../models'

export interface UpdateSupplier {
  run: (supplier: SupplierModel) => Promise<void>
}
