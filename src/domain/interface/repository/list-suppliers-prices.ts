import { SupplierPricesResponse } from '../../response/supplier-prices.response'

export interface ListSupplierPricesRepository {
  run: () => Promise<SupplierPricesResponse[] | undefined>
}
