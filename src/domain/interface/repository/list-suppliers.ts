import { SupplierResponse } from '../../response/supplier.response'

export interface ListSuppliersRepository {
  run: () => Promise<SupplierResponse[] | undefined>
}
