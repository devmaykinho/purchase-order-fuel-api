import { DeleteSupplierPrices, DeleteSupplierPricesRepository } from '../interface'

export class DeleteSupplierPricesUseCase implements DeleteSupplierPrices {
  constructor (
    private readonly deleteSupplierPricesRepository: DeleteSupplierPricesRepository
  ) {}

  run = async (priceId: number): Promise<void> => {
    return await this.deleteSupplierPricesRepository.run(priceId)
  }
}
