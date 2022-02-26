import { SupplierResponse } from '../../response'

export interface FindActiveSupplierRepository {
  run: () => Promise<SupplierResponse | undefined>
}
