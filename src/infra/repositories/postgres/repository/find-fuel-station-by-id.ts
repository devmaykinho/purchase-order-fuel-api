import { FuelStationEntity } from '../entities'
import { getRepository } from 'typeorm'
import { FindFuelStationByIdRepository } from '../../../../domain/interface'
import { FuelStationResponse } from '../../../../domain/response'
import { fuelStationMapper } from '../mappers/fuel-station.mapper'

export class FindFuelStationByIdRepositoryPg implements FindFuelStationByIdRepository {
  run = async (fuelStationId: number): Promise<FuelStationResponse | undefined> => {
    try {
      const fuelStationEntity = getRepository(FuelStationEntity)
      const fuelStationResponse = await fuelStationEntity.findOne({ id: fuelStationId })
      return fuelStationMapper(fuelStationResponse)
    } catch (error) {
      console.error('FindFuelStationByEmailRepositoryPg:::', error)
      throw new Error('Error ao obter o Posto pelo id.')
    }
  }
}
