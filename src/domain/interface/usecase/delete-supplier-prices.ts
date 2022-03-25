export interface DeleteSupplierPrices {
  run: (priceId: number) => Promise<void>
}
