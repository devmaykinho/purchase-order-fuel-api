import { FuelStationResponse } from '../../response'

export interface FindFuelStationByIdRepository {
  run: (fuelStationId: number) => Promise<FuelStationResponse | undefined>
}
