import { getRepository } from 'typeorm'
import { ActiveFuelStationRepository } from '../../../../domain/interface'
import { FuelStationEntity } from '../entities'

export class ActiveFuelStationRepositoryPg implements ActiveFuelStationRepository {
  run = async (fuelStationId: number): Promise<void> => {
    try {
      const fuelStationEntity = getRepository(FuelStationEntity)
      await fuelStationEntity.update(fuelStationId, { status: 'ACTIVE' })
    } catch (error) {
      console.error('ActiveFuelStationRepositoryPg:::', error)
      throw new Error('Erro ao bloquear o posto de gasolina')
    }
  }
}
