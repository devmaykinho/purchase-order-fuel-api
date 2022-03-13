import { CustomPriceResponse } from '../../response'

export interface FindActiveCustomPriceRepository {
  run: (fuelStationId: Number) => Promise<CustomPriceResponse[] | undefined>
}
