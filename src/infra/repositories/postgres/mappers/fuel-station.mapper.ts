import { FuelStationResponse } from '../../../../domain/response'
import { FuelStationEntity } from '../entities'

export const fuelStationMapper = (fuelStationEntity: FuelStationEntity | undefined): FuelStationResponse | undefined => {
  if (!fuelStationEntity) {
    return undefined
  }

  return {
    id: fuelStationEntity.id.toString(),
    name: fuelStationEntity.name,
    cnpj: fuelStationEntity.cnpj,
    email: fuelStationEntity.email,
    telephone: fuelStationEntity.telephone,
    city: fuelStationEntity.city,
    district: fuelStationEntity.district,
    street: fuelStationEntity.street,
    fuelStationNumber: fuelStationEntity.fuelStationNumber,
    cep: fuelStationEntity.cep,
    flag: fuelStationEntity.flag,
    isNetwork: fuelStationEntity.isNetwork,
    networkName: fuelStationEntity.networkName ?? '',
    password: fuelStationEntity.password,
    status: fuelStationEntity.status
  }
}
