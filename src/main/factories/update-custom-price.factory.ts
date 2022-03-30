import { UpdateCustomPriceUseCase } from '../../domain/usecase/update-custom-price.usecase'
import { UpdateCustomPriceRepositoryPg, FindActiveCustomPriceByFilterRepositoryPg } from '../../infra/repositories/postgres/repository'
import { UpdateCustomPriceController } from '../../presentation/controllers'
import { DuplicateCustomPriceValidation } from '../../domain/validations'
import { makeCreateCustomPriceValidationFactory } from './validations/create-custom-price-validation.factory'
import { Controller } from '../../presentation/interfaces/controller'

export const makeUpdateCustomPriceController = (): Controller => {
  const updateCustomPriceRepository = new UpdateCustomPriceRepositoryPg()
  const findActiveCustomPriceRepository = new FindActiveCustomPriceByFilterRepositoryPg()
  const duplicateCustomPriceValidation = new DuplicateCustomPriceValidation(findActiveCustomPriceRepository)
  const updateCustomPriceUseCase = new UpdateCustomPriceUseCase(
    makeCreateCustomPriceValidationFactory(),
    duplicateCustomPriceValidation,
    updateCustomPriceRepository
  )
  return new UpdateCustomPriceController(updateCustomPriceUseCase)
}
