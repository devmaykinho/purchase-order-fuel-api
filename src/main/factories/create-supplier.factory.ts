import { CreateSupplierUseCase } from '../../domain/usecase/create-supplier.usecase'
import { CreateSupplierRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CreateSupplierController } from '../../presentation/controllers'
import { makeSupplierValidationFactory } from './validations/create-supplier-validation.factory'
import { Controller } from '../../presentation/interfaces/controller'

export const makeSupplierController = (): Controller => {
  const createSupplierRepository = new CreateSupplierRepositoryPg()
  const createSupplierUseCase = new CreateSupplierUseCase(
    makeSupplierValidationFactory(),
    createSupplierRepository
  )
  return new CreateSupplierController(createSupplierUseCase)
}
