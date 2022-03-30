import { getRepository } from 'typeorm'
import { UpdateSupplierRepository } from '../../../../domain/interface'
import { SupplierModel } from '../../../../domain/models'
import { SupplierEntity } from '../entities'

export class UpdateSupplierRepositoryPg implements UpdateSupplierRepository {
  run = async (supplier: SupplierModel): Promise<void> => {
    try {
      const { id, ...supplierUpdate } = supplier
      const supplierEntity = getRepository(SupplierEntity)
      await supplierEntity.update({
        id: id
      }, {
        ...supplierUpdate
      })
    } catch (error) {
      console.error('UpdateSupplierRepositoryPg:::', error)
      throw new Error('Erro ao atualizar o fornecedor')
    }
  }
}
