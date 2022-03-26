export interface CancelCustomPrice {
  run: (customPriceId: number) => Promise<void>
}
