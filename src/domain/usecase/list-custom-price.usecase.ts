import { ListCustomPrices, ListCustomPricesRepository } from '../interface'
import { CustomPriceResponse } from '../response'

export class ListCustomPricesUseCase implements ListCustomPrices {
  constructor (
    private readonly listCustomPricesRepository: ListCustomPricesRepository
  ) {}

  run = async (): Promise<CustomPriceResponse[] | undefined> => {
    return await this.listCustomPricesRepository.run()
  }
}
