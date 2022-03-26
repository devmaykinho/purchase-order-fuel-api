export interface CancelCustomPriceRepository {
  run: (customPriceId: number) => Promise<void>
}
