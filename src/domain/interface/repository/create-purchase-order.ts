import { PurchaseOrderModel } from '../../models'

export interface CreatePurchaseOrderRepository {
  run: (purchaseOrder: PurchaseOrderModel) => Promise<void>
}
