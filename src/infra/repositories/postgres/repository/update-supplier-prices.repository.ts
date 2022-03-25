import { getRepository } from 'typeorm'
import { UpdateSupplierPricesRepository } from '../../../../domain/interface'
import { SupplierPricesModel } from '../../../../domain/models'
import { SupplierPricesEntity } from '../entities'

export class UpdateSupplierPricesRepositoryPg implements UpdateSupplierPricesRepository {
  run = async (supplierPrices: SupplierPricesModel): Promise<void> => {
    try {
      const { id, ...priceUpdate } = supplierPrices
      const supplierEntity = getRepository(SupplierPricesEntity)
      await supplierEntity.update({
        id: id
      }, {
        ...priceUpdate
      })
    } catch (error) {
      console.error('UpdateSupplierPricesRepositoryPg:::', error)
      throw new Error('Erro ao atualizar o preço para o fornecedor')
    }
  }
}
