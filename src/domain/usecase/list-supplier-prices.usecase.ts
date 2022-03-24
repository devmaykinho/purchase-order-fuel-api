import { ListSupplierPrices, ListSupplierPricesRepository } from '../interface'
import { SupplierPricesResponse } from '../response'

export class ListSupplierPricesUseCase implements ListSupplierPrices {
  constructor (
    private readonly listSupplierPricesRepository: ListSupplierPricesRepository
  ) {}

  run = async (): Promise<SupplierPricesResponse[] | undefined> => {
    return await this.listSupplierPricesRepository.run()
  }
}
