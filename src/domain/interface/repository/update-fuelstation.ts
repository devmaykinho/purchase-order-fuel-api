import { FuelStation } from '../../models'

export interface UpdateFuelStationRepository {
  run: (fuelStation: FuelStation) => Promise<void>
}
