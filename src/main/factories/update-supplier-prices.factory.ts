import { UpdateSupplierPricesUseCase } from '../../domain/usecase/update-supplier-prices.usecase'
import { UpdateSupplierPricesRepositoryPg, FindSupplierPricesByFilterRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CreateSupplierPricesController } from '../../presentation/controllers'
import { makeUpdateSupplierPricesValidationFactory } from './validations/update-supplier-prices-validation.factory'
import { DuplicateSupplierPriceValidation } from '../../domain/validations/duplicate-supplier-price.validation'
import { Controller } from '../../presentation/interfaces/controller'

export const makeUpdateSupplierPricesController = (): Controller => {
  const updateSupplierPricesRepository = new UpdateSupplierPricesRepositoryPg()
  const findSupplierPricesByFilterRepositoryPg = new FindSupplierPricesByFilterRepositoryPg()
  const validationDuplicateSupplierPrice = new DuplicateSupplierPriceValidation(findSupplierPricesByFilterRepositoryPg)
  const updateSupplierPriceUseCase = new UpdateSupplierPricesUseCase(
    makeUpdateSupplierPricesValidationFactory(),
    validationDuplicateSupplierPrice,
    updateSupplierPricesRepository
  )
  return new CreateSupplierPricesController(updateSupplierPriceUseCase)
}
