import { CreatePurchaseOrderUseCase } from '../../domain/usecase/create-purchase-order.usecase'
import { CreatePurchaseOrderRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CreatePurchaseOrderController } from '../../presentation/controllers'
import { makeCreatePurchaseOrderValidationFactory } from './validations/create-purchase-order-validation.factory'
import { Controller } from '../../presentation/interfaces/controller'

export const makeCreatePurchaseOrderController = (): Controller => {
  const createPurchaseOrderRepositoryRepository = new CreatePurchaseOrderRepositoryPg()
  const createPurchaseOrderUseCase = new CreatePurchaseOrderUseCase(
    makeCreatePurchaseOrderValidationFactory(),
    createPurchaseOrderRepositoryRepository
  )
  return new CreatePurchaseOrderController(createPurchaseOrderUseCase)
}
