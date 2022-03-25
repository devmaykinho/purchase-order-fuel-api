import { CustomPriceResponse } from '../../response/custom-price.response'

export interface ListCustomPrices {
  run: () => Promise<CustomPriceResponse[] | undefined>
}
