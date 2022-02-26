import { FuelStation } from '../../models'

export interface CreateFuelStationRepository {
  run: (fuelStation: FuelStation) => Promise<void>
}
