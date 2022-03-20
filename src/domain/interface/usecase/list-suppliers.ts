import { SupplierResponse } from '../../response/supplier.response'

export interface ListSuppliers {
  run: () => Promise<SupplierResponse[] | undefined>
}
