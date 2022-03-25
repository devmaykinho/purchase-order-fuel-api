export interface DeleteSupplierPricesRepository {
  run: (priceId: number) => Promise<void>
}
