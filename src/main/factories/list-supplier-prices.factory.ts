import { ListSupplierPricesUseCase } from '../../domain/usecase/list-supplier-prices.usecase'
import { ListSupplierPricesRepositoryPg } from '../../infra/repositories/postgres/repository'
import { ListSupplierPricesController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeListSupplierPricesController = (): Controller => {
  const listSupplierPricesRepository = new ListSupplierPricesRepositoryPg()
  const listSupplierPricesUseCase = new ListSupplierPricesUseCase(
    listSupplierPricesRepository
  )
  return new ListSupplierPricesController(listSupplierPricesUseCase)
}
