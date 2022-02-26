import { FuelStationEntity } from '../entities'
import { getRepository } from 'typeorm'
import { FindFuelStationByEmailRepository } from '../../../../domain/interface'
import { FuelStationResponse } from '../../../../domain/response'
import { fuelStationMapper } from '../mappers/fuel-station.mapper'

export class FindFuelStationByEmailRepositoryPg implements FindFuelStationByEmailRepository {
  run = async (email: string): Promise<FuelStationResponse | undefined> => {
    try {
      const fuelStationEntity = getRepository(FuelStationEntity)
      const fuelStationResponse = await fuelStationEntity.findOne({ email })
      return fuelStationMapper(fuelStationResponse)
    } catch (error) {
      console.error('FindFuelStationByEmailRepositoryPg:::', error)
      throw new Error('Error ao criar o Posto.')
    }
  }
}
