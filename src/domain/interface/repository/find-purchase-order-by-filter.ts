import { PurchaseOrderResponse } from '../../response'

export interface FindPurchaseOrderByFilterRepository {
  run: (fuelStationId: Number) => Promise<PurchaseOrderResponse[]>
}
