import { getRepository } from 'typeorm'
import { FindFuelStationByEmailOrCnpjRepository } from '../../../../domain/interface'
import { FuelStationResponse } from '../../../../domain/response'
import { FuelStationEntity } from '../entities'
import { fuelStationMapper } from '../mappers/fuel-station.mapper'

export class FindFuelStationByEmailOrCnpjRepositoryPg implements FindFuelStationByEmailOrCnpjRepository {
  run = async ({ email, cnpj }): Promise<FuelStationResponse | undefined> => {
    const fuelStationEntity = getRepository(FuelStationEntity)
    const fuelStationResponse = await fuelStationEntity.findOne({
      where: [
        { cnpj },
        { email }
      ]
    })
    return fuelStationMapper(fuelStationResponse)
  }
}
