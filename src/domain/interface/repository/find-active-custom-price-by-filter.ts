import { CustomPriceResponse } from '../../response'
import { FuelType } from '../types'

export interface filter {
  fuelStationId: Number
  fuelType: FuelType
}

export interface FindActiveCustomPriceByfilterRepository {
  run: (filter: filter) => Promise<CustomPriceResponse | undefined>
}
