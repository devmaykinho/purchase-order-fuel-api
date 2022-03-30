import { FuelStation } from '../../models'

export interface UpdateFuelStation {
  run: (fuelStation: FuelStation) => Promise<void>
}
