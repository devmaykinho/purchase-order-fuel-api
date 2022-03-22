import { FuelStationResponse } from '../../response/fuel-station.response'

export interface ListFuelStations {
  run: () => Promise<FuelStationResponse[] | undefined>
}
