import { PurchaseOrderModel } from '../../models'

export interface CreatePurchaseOrder {
  run: (purchaseOrder: PurchaseOrderModel) => Promise<void>
}
