import { PurchaseOrderResponse } from '../../response'

export interface FindPurchaseOrderByFilter {
  run: (fuelStationId: Number) => Promise<PurchaseOrderResponse[]>
}
