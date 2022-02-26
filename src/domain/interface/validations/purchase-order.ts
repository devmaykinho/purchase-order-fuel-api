import { PurchaseOrderModel } from '../../models/purchase-order'

export interface PurcharseOrderValidation {
  validate: (input: PurchaseOrderModel) => Promise<void>
}
