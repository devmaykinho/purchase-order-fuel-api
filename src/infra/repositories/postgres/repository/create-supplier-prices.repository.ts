import { getRepository } from 'typeorm'
import { CreateSupplierPricesRepository } from '../../../../domain/interface'
import { SupplierPricesModel } from '../../../../domain/models'
import { SupplierPricesEntity } from '../entities'

export class CreateSupplierPricesRepositoryPg implements CreateSupplierPricesRepository {
  run = async (supplierPrices: SupplierPricesModel): Promise<void> => {
    try {
      const supplierEntity = getRepository(SupplierPricesEntity)
      await supplierEntity.save(supplierPrices)
    } catch (error) {
      console.error('CreateSupplierPricesRepositoryPg:::', error)
      throw new Error('Erro ao criar o preço para o fornecedor')
    }
  }
}
