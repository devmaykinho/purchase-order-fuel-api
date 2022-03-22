import { FuelStationStatus, IsNetwork } from '../../domain/models'
import { FuelStationResponse } from '../../domain/response'

interface FuelStationResponseFixtureProps {
  id?: number
  name?: string
  cnpj?: string
  email?: string
  telephone?: string
  city?: string
  district?: string
  street?: string
  fuelStationNumber?: string
  cep?: string
  flag?: string
  isNetwork?: IsNetwork
  networkName?: string
  password?: string
  status?: FuelStationStatus
}

export const newFuelStationResponse = (props?: FuelStationResponseFixtureProps): FuelStationResponse => {
  const status = props?.status ?? 'PEDING'
  const isNetwork = props?.isNetwork ?? 'SIM'

  return {
    id: Number(props?.name) ?? 1,
    name: props?.name ?? 'any_name',
    cnpj: props?.cnpj ?? 'any_cnpj',
    email: props?.email ?? 'any_email',
    telephone: props?.telephone ?? 'any_telephone',
    city: props?.city ?? 'any_city',
    district: props?.district ?? 'any_district',
    street: props?.street ?? 'any_street',
    fuelStationNumber: props?.fuelStationNumber ?? 'any_fuelStationNumber',
    cep: props?.cep ?? 'any_cep',
    flag: props?.flag ?? 'any_flag',
    isNetwork: isNetwork,
    networkName: props?.networkName ?? 'any_networkName',
    status: status,
    password: props?.password ?? 'any_password'
  }
}
