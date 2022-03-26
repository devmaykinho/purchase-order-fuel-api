import { CancelCustomPrice, CancelCustomPriceRepository } from '../interface'

export class CancelCustomPriceUseCase implements CancelCustomPrice {
  constructor (
    private readonly cancelCustomPriceRepository: CancelCustomPriceRepository
  ) {}

  run = async (customPriceId: number): Promise<void> => {
    await this.cancelCustomPriceRepository.run(customPriceId)
  }
}
