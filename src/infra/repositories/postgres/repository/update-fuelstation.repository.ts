import { getRepository } from 'typeorm'
import { UpdateFuelStationRepository } from '../../../../domain/interface'
import { FuelStation } from '../../../../domain/models'
import { FuelStationEntity } from '../entities'

export class UpdateFuelStationRepositoryPg implements UpdateFuelStationRepository {
  run = async (fuelStation: FuelStation): Promise<void> => {
    try {
      const { id, ...fuelStationUpdate } = fuelStation
      const fuelStationEntity = getRepository(FuelStationEntity)
      await fuelStationEntity.update({
        id: id
      }, {
        ...fuelStationUpdate
      })
    } catch (error) {
      console.error('UpdateFuelStationRepositoryPg:::', error)
      throw new Error('Erro ao atualizar o posto')
    }
  }
}
