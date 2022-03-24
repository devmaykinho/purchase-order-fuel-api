import { CreateSupplierPricesUseCase } from '../../domain/usecase/create-supplier-prices.usecase'
import { CreateSupplierPricesRepositoryPg, FindSupplierPricesByFilterRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CreateSupplierPricesController } from '../../presentation/controllers'
import { makeCreateSupplierPricesValidationFactory } from './validations/create-supplier-prices-validation.factory'
import { DuplicateSupplierPriceValidation } from '../../domain/validations/duplicate-supplier-price.validation'
import { Controller } from '../../presentation/interfaces/controller'

export const makeSupplierPricesController = (): Controller => {
  const createSupplierPricesRepository = new CreateSupplierPricesRepositoryPg()
  const findSupplierPricesByFilterRepositoryPg = new FindSupplierPricesByFilterRepositoryPg()
  const validationDuplicateSupplierPrice = new DuplicateSupplierPriceValidation(findSupplierPricesByFilterRepositoryPg)
  const createSupplierPriceUseCase = new CreateSupplierPricesUseCase(
    makeCreateSupplierPricesValidationFactory(),
    validationDuplicateSupplierPrice,
    createSupplierPricesRepository
  )
  return new CreateSupplierPricesController(createSupplierPriceUseCase)
}
