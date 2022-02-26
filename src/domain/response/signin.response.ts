import { FuelStationResponse } from './fuel-station.response'

export interface SigninResponse {
  token: string
  fuelStation: FuelStationResponse
}
