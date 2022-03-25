import { DeleteSupplierPricesUseCase } from '../../domain/usecase/delete-supplier-prices.usecase'
import { DeleteSupplierPricesRepositoryPg } from '../../infra/repositories/postgres/repository'
import { DeleteSupplierPricesController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeDeleteSupplierPricesController = (): Controller => {
  const deleteSupplierPricesRepositoryPg = new DeleteSupplierPricesRepositoryPg()
  const deleteSupplierPricesUseCase = new DeleteSupplierPricesUseCase(
    deleteSupplierPricesRepositoryPg
  )
  return new DeleteSupplierPricesController(deleteSupplierPricesUseCase)
}
