import { IsActive } from '../interface/types'

export interface SupplierModel {
  id?: number
  name: string
  cnpj: string
  email: string
  phoneNumber: string
  address: string
  city: string
  uf: string
  cep: string
  isActive: IsActive
  observation: string
}
