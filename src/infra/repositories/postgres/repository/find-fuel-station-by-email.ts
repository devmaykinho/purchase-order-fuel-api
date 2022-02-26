import { FuelStationEntity } from '../entities'
import { getRepository } from 'typeorm'
import { FindFuelStationByEmailRepository } from '../../../../domain/interface'
import { FuelStationResponse } from '../../../../domain/response'
import { fuelStationMapper } from '../mappers/fuel-station.mapper'

export class FindFuelStationByEmailRepositoryPg implements FindFuelStationByEmailRepository {
  run = async (email: string): Promise<FuelStationResponse | undefined> => {
    const fuelStationEntity = getRepository(FuelStationEntity)
    const fuelStationResponse = await fuelStationEntity.findOne({ email })
    return fuelStationMapper(fuelStationResponse)
  }
}
