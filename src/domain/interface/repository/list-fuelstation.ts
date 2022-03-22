import { FuelStationResponse } from '../../response/fuel-station.response'

export interface ListFuelStationRepository {
  run: () => Promise<FuelStationResponse[] | undefined>
}
