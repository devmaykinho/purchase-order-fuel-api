import { SupplierPricesResponse } from '../../response/supplier-prices.response'

export interface ListSupplierPrices {
  run: () => Promise<SupplierPricesResponse[] | undefined>
}
