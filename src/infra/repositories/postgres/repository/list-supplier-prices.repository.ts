import { SupplierPricesEntity } from '../entities'
import { getRepository } from 'typeorm'
import { ListSupplierPricesRepository } from '../../../../domain/interface'
import { SupplierPricesResponse } from '../../../../domain/response'

export class ListSupplierPricesRepositoryPg implements ListSupplierPricesRepository {
  run = async (): Promise<SupplierPricesResponse[] | undefined> => {
    try {
      const supplierPricesEntity = getRepository(SupplierPricesEntity)
      return await supplierPricesEntity.find()
    } catch (error) {
      console.error('ListSupplierPricesRepositoryPg:::', error)
      throw new Error('Error ao obter os preços')
    }
  }
}
