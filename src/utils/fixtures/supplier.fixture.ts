import { IsActive } from '../../domain/interface/types'
import { SupplierModel } from '../../domain/models'

interface SupplierFixtureProps {
  name?: string
  cnpj?: string
  email?: string
  telephone?: string
  city?: string
  district?: string
  street?: string
  supplierNumber?: string
  cep?: string
  isActive?: IsActive
}

export const newSupplier = (props?: SupplierFixtureProps): SupplierModel => ({
  name: props?.name ?? 'IPIRANGA',
  cnpj: props?.cnpj ?? '0001',
  email: props?.email ?? 'teste@teste.com',
  telephone: props?.telephone ?? '1999999999',
  city: props?.city ?? 'Cidade',
  district: props?.district ?? 'Bairro',
  street: props?.street ?? 'Rua',
  supplierNumber: props?.supplierNumber ?? '10',
  cep: props?.cep ?? '13270-00',
  isActive: props?.isActive ?? 'SIM'
})
