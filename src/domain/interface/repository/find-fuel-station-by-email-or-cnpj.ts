import { FuelStationResponse } from '../../response'

export interface FuelStationFilter {
  email: string
  cnpj: string
}

export interface FindFuelStationByEmailOrCnpjRepository {
  run: (filter: FuelStationFilter) => Promise<FuelStationResponse | undefined>
}
