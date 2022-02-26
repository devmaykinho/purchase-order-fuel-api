import { getRepository } from 'typeorm'
import { CreateSupplierRepository } from '../../../../domain/interface'
import { SupplierModel } from '../../../../domain/models'
import { SupplierEntity } from '../entities'

export class CreateSupplierRepositoryPg implements CreateSupplierRepository {
  run = async (supplier: SupplierModel): Promise<void> => {
    try {
      const supplierEntity = getRepository(SupplierEntity)
      await supplierEntity.save(supplier)
    } catch (error) {
      console.error('CreateSupplierRepositoryPg:::', error)
      throw new Error('Error ao criar o fornecedor.')
    }
  }
}
