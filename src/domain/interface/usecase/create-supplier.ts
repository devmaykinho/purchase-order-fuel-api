import { SupplierModel } from '../../models/supplier'

export interface CreateSupplier {
  run: (supplier: SupplierModel) => Promise<void>
}
