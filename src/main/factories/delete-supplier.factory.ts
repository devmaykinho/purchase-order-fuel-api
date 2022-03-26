import { DeleteSupplierUseCase } from '../../domain/usecase/delete-suplier.usecase'
import { DeleteSupplierRepositoryPg } from '../../infra/repositories/postgres/repository'
import { DeleteSupplierController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeDeleteSupplierController = (): Controller => {
  const deleteSupplierRepository = new DeleteSupplierRepositoryPg()
  const deleteSupplierUseCase = new DeleteSupplierUseCase(
    deleteSupplierRepository
  )
  return new DeleteSupplierController(deleteSupplierUseCase)
}
