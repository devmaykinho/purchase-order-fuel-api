import { getRepository } from 'typeorm'
import { BlockFuelStationRepository } from '../../../../domain/interface'
import { FuelStationEntity } from '../entities'

export class BlockFuelStationRepositoryPg implements BlockFuelStationRepository {
  run = async (fuelStationId: number): Promise<void> => {
    try {
      const fuelStationEntity = getRepository(FuelStationEntity)
      await fuelStationEntity.update(fuelStationId, { status: 'BLOCKED' })
    } catch (error) {
      console.error('BlockFuelStationRepositoryPg:::', error)
      throw new Error('Erro ao bloquear o posto de gasolina')
    }
  }
}
