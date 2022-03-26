import { getRepository } from 'typeorm'
import { DeleteSupplierRepository } from '../../../../domain/interface'
import { SupplierEntity } from '../entities'

export class DeleteSupplierRepositoryPg implements DeleteSupplierRepository {
  run = async (supplierId: number): Promise<void> => {
    try {
      const supplierEntity = getRepository(SupplierEntity)
      await supplierEntity.delete(supplierId)
    } catch (error) {
      console.error('DeleteSupplierRepositoryPg:::', error)
      throw new Error('Erro ao excluir o fornecedor')
    }
  }
}
