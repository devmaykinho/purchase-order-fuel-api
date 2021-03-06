import { CreatePurchaseOrder, PurcharseOrderValidations } from '../interface'
import { CreatePurchaseOrderRepository } from '../interface/repository/create-purchase-order'
import { PurchaseOrderModel } from '../models'

export class CreatePurchaseOrderUseCase implements CreatePurchaseOrder {
  constructor (
    private readonly purchaseOrderValidation: PurcharseOrderValidations,
    private readonly createPurchaseOrderRepository: CreatePurchaseOrderRepository
  ) {}

  run = async (purchaseOrder: PurchaseOrderModel): Promise<void> => {
    await this.purchaseOrderValidation.validate(purchaseOrder)
    await this.createPurchaseOrderRepository.run({ ...purchaseOrder, status: 'PENDENTE' })
  }
}
