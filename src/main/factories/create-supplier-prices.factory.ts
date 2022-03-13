import { CreateSupplierPricesUseCase } from '../../domain/usecase/create-supplier-prices.usecase'
import { CreateSupplierPricesRepositoryPg, FindSupplierPricesBySupplierIdRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CreateSupplierPricesController } from '../../presentation/controllers'
import { makeCreateSupplierPricesValidationFactory } from './validations/create-supplier-prices-validation.factory'
import { DuplicateSupplierPriceValidation } from '../../domain/validations/duplicate-supplier-price.validation'
import { Controller } from '../../presentation/interfaces/controller'

export const makeSupplierPricesController = (): Controller => {
  const createSupplierPricesRepository = new CreateSupplierPricesRepositoryPg()
  const findSupplierPricesBySupplierIdRepository = new FindSupplierPricesBySupplierIdRepositoryPg()
  const validationDuplicateSupplierPrice = new DuplicateSupplierPriceValidation(findSupplierPricesBySupplierIdRepository)
  const createSupplierPriceUseCase = new CreateSupplierPricesUseCase(
    makeCreateSupplierPricesValidationFactory(),
    validationDuplicateSupplierPrice,
    createSupplierPricesRepository
  )
  return new CreateSupplierPricesController(createSupplierPriceUseCase)
}
