import { SupplierPricesEntity } from '../entities'
import { getRepository } from 'typeorm'
import { DeleteSupplierPricesRepository } from '../../../../domain/interface'

export class DeleteSupplierPricesRepositoryPg implements DeleteSupplierPricesRepository {
  run = async (priceId: number): Promise<void> => {
    try {
      const supplierPricesEntity = getRepository(SupplierPricesEntity)
      await supplierPricesEntity.delete({ id: priceId })
    } catch (error) {
      console.error('DeleteSupplierPricesRepositoryPg:::', error)
      throw new Error('Error ao excuir o preço')
    }
  }
}
