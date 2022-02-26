import { getRepository } from 'typeorm'
import { CreateFuelStationRepository } from '../../../../domain/interface'
import { FuelStation } from '../../../../domain/models'
import { FuelStationEntity } from '../entities/fuel-station'

export class CreateFuelStationRepositoryPg implements CreateFuelStationRepository {
  run = async (fuelStation: FuelStation): Promise<void> => {
    const fuelStationEntity = getRepository(FuelStationEntity)
    await fuelStationEntity.save(fuelStation)
  }
}
