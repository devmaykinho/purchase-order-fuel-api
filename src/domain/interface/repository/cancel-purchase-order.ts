export interface CancelPurchaseOrderRepository {
  run: (purchaseOrderId: number) => Promise<void>
}
