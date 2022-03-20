export interface CancelPurchaseOrder {
  run: (purchaserOrderId: number) => Promise<void>
}
