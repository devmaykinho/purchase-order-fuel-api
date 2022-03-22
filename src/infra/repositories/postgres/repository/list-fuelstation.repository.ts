import { FuelStationEntity } from '../entities'
import { getRepository } from 'typeorm'
import { ListFuelStationRepository } from '../../../../domain/interface'
import { FuelStationResponse } from '../../../../domain/response'

export class ListFuelStationRepositoryPg implements ListFuelStationRepository {
  run = async (): Promise<FuelStationResponse[] | undefined> => {
    try {
      const fuelStationEntity = getRepository(FuelStationEntity)
      return await fuelStationEntity.find({ order: { id: 'ASC' } })
    } catch (error) {
      console.error('ListFuelStationRepositoryPg:::', error)
      throw new Error('Error ao obter os postos de gasolina')
    }
  }
}
