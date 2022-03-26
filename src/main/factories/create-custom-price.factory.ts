import { CreateCustomPriceUseCase } from '../../domain/usecase/create-custom-price.usecase'
import { CreateCustomPriceRepositoryPg, FindActiveCustomPriceByFilterRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CreateCustomPriceController } from '../../presentation/controllers'
import { DuplicateCustomPriceValidation } from '../../domain/validations'
import { makeCreateCustomPriceValidationFactory } from './validations/create-custom-price-validation.factory'
import { Controller } from '../../presentation/interfaces/controller'

export const makeCreateCustomPriceController = (): Controller => {
  const createCustomPriceRepository = new CreateCustomPriceRepositoryPg()
  const findActiveCustomPriceRepository = new FindActiveCustomPriceByFilterRepositoryPg()
  const duplicateCustomPriceValidation = new DuplicateCustomPriceValidation(findActiveCustomPriceRepository)
  const createCustomPriceUseCase = new CreateCustomPriceUseCase(
    makeCreateCustomPriceValidationFactory(),
    duplicateCustomPriceValidation,
    createCustomPriceRepository
  )
  return new CreateCustomPriceController(createCustomPriceUseCase)
}
