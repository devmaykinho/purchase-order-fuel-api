import { ListSuppliers, ListSuppliersRepository } from '../interface'
import { SupplierResponse } from '../response'

export class ListSuppliersUseCase implements ListSuppliers {
  constructor (
    private readonly listSuppliersRepository: ListSuppliersRepository
  ) {}

  run = async (): Promise<SupplierResponse[] | undefined> => {
    return await this.listSuppliersRepository.run()
  }
}
