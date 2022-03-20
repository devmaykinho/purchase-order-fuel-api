import { CancelPurchaseOrderRepository, CancelPurchaseOrder } from '../interface'

export class CancelPurchaseOrderUseCase implements CancelPurchaseOrder {
  constructor (
    private readonly cancelPurchaseOrderRepository: CancelPurchaseOrderRepository
  ) {}

  run = async (purchaserOrderId: number): Promise<void> => {
    await this.cancelPurchaseOrderRepository.run(purchaserOrderId)
  }
}
