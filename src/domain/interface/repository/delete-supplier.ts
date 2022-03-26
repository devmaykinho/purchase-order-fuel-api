export interface DeleteSupplierRepository {
  run: (supplierId: number) => Promise<void>
}
