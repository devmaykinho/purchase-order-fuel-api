import { HomePriceResponse } from '../../response'

export interface FindHomePrice {
  run: (fuelStationId: Number) => Promise<HomePriceResponse[] | undefined>
}
