export type FuelStationStatus = 'PEDING' | 'ACTIVE' | 'BLOCKED'
export type IsNetwork = 'SIM' | 'NÃO'

export interface FuelStation {
  id?: number
  name: string
  cnpj: string
  email: string
  telephone: string
  city: string
  district: string
  street: string
  fuelStationNumber: string
  cep: string
  flag: string
  isNetwork: IsNetwork
  networkName: string
  password: string
  passwordConfirmation: string
  status?: FuelStationStatus
}
