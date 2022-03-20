import { IsActive } from '../../domain/interface/types'
import { SupplierModel } from '../../domain/models'

interface SupplierFixtureProps {
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

export const newSupplier = (props?: SupplierFixtureProps): SupplierModel => ({
  name: props?.name ?? 'IPIRANGA',
  cnpj: props?.cnpj ?? '0001',
  email: props?.email ?? 'teste@teste.com',
  phoneNumber: props?.phoneNumber ?? '1999999999',
  address: props?.address ?? 'address',
  city: props?.city ?? 'Cidade',
  uf: props?.uf ?? 'uf',
  cep: props?.cep ?? '13270-00',
  isActive: props?.isActive ?? 'SIM',
  observation: props?.observation ?? 'SIM'
})
