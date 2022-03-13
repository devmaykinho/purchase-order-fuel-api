import { SupplierPricesResponse } from '../../response/supplier-prices.response'

export interface FindSupplierPricesBySupplierIdRepository {
  run: (supplierId: string) => Promise<SupplierPricesResponse | undefined>
}
