import { FindHomePriceUseCase } from '../../domain/usecase/find-home-price.usecase'
import { FindActiveCustomPriceRepositoryPg, FindSupplierPricesByFilterRepositoryPg } from '../../infra/repositories/postgres/repository'
import { FindHomePriceController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'
import { makeFindHomePriceValidationFactory } from './validations/find-home-price-validation.factory'

export const makeFindHomePriceController = (): Controller => {
  const findActiveCustomPriceRepository = new FindActiveCustomPriceRepositoryPg()
  const findSupplierPricesByFilterRepository = new FindSupplierPricesByFilterRepositoryPg()
  const findHomePriceUseCase = new FindHomePriceUseCase(
    makeFindHomePriceValidationFactory(),
    findActiveCustomPriceRepository,
    findSupplierPricesByFilterRepository
  )
  return new FindHomePriceController(findHomePriceUseCase)
}
