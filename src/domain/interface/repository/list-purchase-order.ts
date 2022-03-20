import { PurchaseOrderResponse } from '../../response/purchase-order.response'

export interface ListPurchaseOrderRepository {
  run: () => Promise<PurchaseOrderResponse[] | undefined>
}
