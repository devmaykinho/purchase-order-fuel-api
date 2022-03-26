export interface DeleteSupplier {
  run: (supplierId: number) => Promise<void>
}
