import { CreateCustomPriceUseCase } from '../../domain/usecase/create-custom-price.usecase'
import { CreateCustomPriceRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CreateCustomPriceController } from '../../presentation/controllers'
import { makeCreateCustomPriceValidationFactory } from './validations/create-custom-price-validation.factory'
import { Controller } from '../../presentation/interfaces/controller'

export const makeCreateCustomPriceController = (): Controller => {
  const createCustomPriceRepository = new CreateCustomPriceRepositoryPg()
  const createCustomPriceUseCase = new CreateCustomPriceUseCase(
    makeCreateCustomPriceValidationFactory(),
    createCustomPriceRepository
  )
  return new CreateCustomPriceController(createCustomPriceUseCase)
}
