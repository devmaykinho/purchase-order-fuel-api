import { IsActive } from '../interface/types'

export interface SupplierModel {
  name: string
  cnpj: string
  email: string
  telephone: string
  city: string
  district: string
  street: string
  supplierNumber: string
  cep: string
  isActive: IsActive
}
