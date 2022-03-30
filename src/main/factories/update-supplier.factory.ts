import { UpdateSupplierUseCase } from '../../domain/usecase/update-supplier.usecase'
import { UpdateSupplierRepositoryPg } from '../../infra/repositories/postgres/repository'
import { UpdateSupplierController } from '../../presentation/controllers'
import { makeSupplierValidationFactory } from './validations/create-supplier-validation.factory'
import { Controller } from '../../presentation/interfaces/controller'

export const makeUpdateSupplierController = (): Controller => {
  const updateSupplierRepositoryPg = new UpdateSupplierRepositoryPg()
  const updateSupplierUseCase = new UpdateSupplierUseCase(
    makeSupplierValidationFactory(),
    updateSupplierRepositoryPg
  )
  return new UpdateSupplierController(updateSupplierUseCase)
}
