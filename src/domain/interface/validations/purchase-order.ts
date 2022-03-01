import { PurchaseOrderModel } from '../../models/purchase-order'

export interface PurcharseOrderValidations {
  validate: (input: PurchaseOrderModel) => Promise<void>
}
