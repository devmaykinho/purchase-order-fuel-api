import { FuelStationResponse } from '../../response'

export interface FindFuelStationByEmailRepository {
  run: (email: string) => Promise<FuelStationResponse | undefined>
}
