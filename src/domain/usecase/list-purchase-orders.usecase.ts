import { ListPurchaseOrderRepository, ListPurchaseOrders } from '../interface'
import { PurchaseOrderResponse } from '../response'

export class ListPurchaseOrdersUseCase implements ListPurchaseOrders {
  constructor (
    private readonly listPurchaseOrderRepository: ListPurchaseOrderRepository
  ) {}

  run = async (): Promise<PurchaseOrderResponse[] | undefined> => {
    return await this.listPurchaseOrderRepository.run()
  }
}
