import { CreateSupplierUseCase } from '../../domain/usecase/create-client.usecase'
import { CreateClientRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CreateClientController } from '../../presentation/controllers'
import { makeClientValidationFactory } from './validations/create-client-validation.factory'
import { Controller } from '../../presentation/interfaces/controller'

export const makeClientController = (): Controller => {
  const createClientRepository = new CreateClientRepositoryPg()
  const createSupplierUseCase = new CreateSupplierUseCase(
    makeClientValidationFactory(),
    createClientRepository
  )
  return new CreateClientController(createSupplierUseCase)
}
