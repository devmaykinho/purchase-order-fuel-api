import { CreateSupplierPricesUseCase } from '../../domain/usecase/create-supplier-prices.usecase'
import { CreateSupplierPricesRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CreateSupplierPricesController } from '../../presentation/controllers'
import { makeCreateSupplierPricesValidationFactory } from './validations/create-supplier-prices-validation.factory'
import { Controller } from '../../presentation/interfaces/controller'

export const makeSupplierPricesController = (): Controller => {
  const createSupplierPricesRepository = new CreateSupplierPricesRepositoryPg()
  const createSupplierPriceUseCase = new CreateSupplierPricesUseCase(
    makeCreateSupplierPricesValidationFactory(),
    createSupplierPricesRepository
  )
  return new CreateSupplierPricesController(createSupplierPriceUseCase)
}
