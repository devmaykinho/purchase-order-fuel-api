import { FuelStationStatus, FuelStation, IsNetwork } from '../../domain/models'

interface FuelStationFixtureProps {
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
  passwordConfirmation?: string
  status?: FuelStationStatus
}

export const newFuelStation = (props?: FuelStationFixtureProps): FuelStation => {
  const status = props?.status ?? 'PEDING'
  const isNetwork = props?.isNetwork ?? 'SIM'

  return {
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
    password: props?.password ?? 'any_password',
    passwordConfirmation: props?.passwordConfirmation ?? 'any_password'
  }
}
