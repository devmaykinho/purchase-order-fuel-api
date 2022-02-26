import { FindOrderPriceByFilterUseCase } from '../../domain/usecase/find-order-price-by-filter.usecase'
import { FindActiveCustomPriceRepositoryPg, FindSupplierPricesByFilterRepositoryPg } from '../../infra/repositories/postgres/repository'
import { FindOrderPriceByFilterController } from '../../presentation/controllers'
import { makeFindOrderPriceByFilterValidationFactory } from './validations/find-order-price-by-filter-validation.factory'
import { Controller } from '../../presentation/interfaces/controller'

export const makeFindOrderPriceByFilterController = (): Controller => {
  const findActiveCustomPriceRepository = new FindActiveCustomPriceRepositoryPg()
  const findSupplierPricesByFilterRepository = new FindSupplierPricesByFilterRepositoryPg()
  const findOrderPriceByFilterUseCase = new FindOrderPriceByFilterUseCase(
    makeFindOrderPriceByFilterValidationFactory(),
    findActiveCustomPriceRepository,
    findSupplierPricesByFilterRepository
  )
  return new FindOrderPriceByFilterController(findOrderPriceByFilterUseCase)
}
