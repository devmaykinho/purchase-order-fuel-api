import { Controller } from '../../presentation/interfaces/controller'
import { FindPurchaseOrderByFilterUseCase } from '../../domain/usecase/find-purchase-order-by-filter.usecase'
import { FindPurchaseOrderByFilterRepositoryPg } from '../../infra/repositories/postgres/repository'
import { FindPurchaseOrderByFilterController } from '../../presentation/controllers'
import { makeFindPurchaseOrderByFilterValidationFactory } from './validations/find-purchase-order-by-filter-validation.factory'

export const makeFindPurchaseOrderByFilterController = (): Controller => {
  const findPurchaseOrderByFilterRepository = new FindPurchaseOrderByFilterRepositoryPg()
  const findPurchaseOrderUseCase = new FindPurchaseOrderByFilterUseCase(
    makeFindPurchaseOrderByFilterValidationFactory(),
    findPurchaseOrderByFilterRepository
  )
  return new FindPurchaseOrderByFilterController(findPurchaseOrderUseCase)
}
