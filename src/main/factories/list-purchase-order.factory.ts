import { ListPurchaseOrdersUseCase } from '../../domain/usecase/list-purchase-orders.usecase'
import { ListPurchaseOrdersRepositoryPg } from '../../infra/repositories/postgres/repository'
import { ListPurchaseOrdersController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeListPurchaseOrdersController = (): Controller => {
  const listPurchaseOrdersRepositoryPg = new ListPurchaseOrdersRepositoryPg()
  const listPurchaseOrdersUseCase = new ListPurchaseOrdersUseCase(
    listPurchaseOrdersRepositoryPg
  )
  return new ListPurchaseOrdersController(listPurchaseOrdersUseCase)
}
