import { CustomPriceResponse } from '../../response/custom-price.response'

export interface ListCustomPricesRepository {
  run: () => Promise<CustomPriceResponse[] | undefined>
}
