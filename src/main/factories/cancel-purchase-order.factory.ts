import { CancelPurchaseOrderUseCase } from '../../domain/usecase/cancel-purchase-order.usecase'
import { CancelPurchaseOrderRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CancelPurchaseOrderController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeCancelPurchaseOrderController = (): Controller => {
  const cancelPurchaserOrderRepository = new CancelPurchaseOrderRepositoryPg()
  const cancelPurchaseOrderUseCase = new CancelPurchaseOrderUseCase(
    cancelPurchaserOrderRepository
  )
  return new CancelPurchaseOrderController(cancelPurchaseOrderUseCase)
}
