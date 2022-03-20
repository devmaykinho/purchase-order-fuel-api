import { SupplierEntity } from '../entities'
import { getRepository } from 'typeorm'
import { ListSuppliersRepository } from '../../../../domain/interface'
import { SupplierResponse } from '../../../../domain/response'

export class ListSuppliersRepositoryPg implements ListSuppliersRepository {
  run = async (): Promise<SupplierResponse[] | undefined> => {
    try {
      const supplierEntity = getRepository(SupplierEntity)
      return await supplierEntity.find()
    } catch (error) {
      console.error('ListSuppliersRepositoryPg:::', error)
      throw new Error('Error ao obter os fornecedores')
    }
  }
}
