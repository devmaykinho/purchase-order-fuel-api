import { DeleteSupplierRepository, DeleteSupplier } from '../interface'

export class DeleteSupplierUseCase implements DeleteSupplier {
  constructor (
    private readonly deleteSupplierRepository: DeleteSupplierRepository
  ) {}

  run = async (supplierId: number): Promise<void> => {
    await this.deleteSupplierRepository.run(supplierId)
  }
}
