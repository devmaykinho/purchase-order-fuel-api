import { PurchaseOrderResponse } from '../../response/purchase-order.response'

export interface ListPurchaseOrders {
  run: () => Promise<PurchaseOrderResponse[] | undefined>
}
