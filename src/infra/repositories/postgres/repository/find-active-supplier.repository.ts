import { SupplierEntity } from '../entities'
import { getRepository } from 'typeorm'
import { FindActiveSupplierRepository } from '../../../../domain/interface'
import { SupplierResponse } from '../../../../domain/response'

export class FindActiveSupplierRepositoryPg implements FindActiveSupplierRepository {
  run = async (): Promise<SupplierResponse | undefined> => {
    try {
      const supplierEntity = getRepository(SupplierEntity)
      return await supplierEntity.findOne({ isActive: 'SIM' })
    } catch (error) {
      console.error('FindActiveSupplierRepositoryPg:::', error)
      throw new Error('Error ao pesquisar um fornecedor ativo.')
    }
  }
}
