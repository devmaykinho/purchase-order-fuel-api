import { getRepository } from 'typeorm'
import { FindSupplierPricesBySupplierIdRepository } from '../../../../domain/interface'
import { SupplierPricesResponse } from '../../../../domain/response'
import { SupplierPricesEntity } from '../entities'
import { supplierPricesMapper } from '../mappers/supplier-prices.mapper'

export class FindSupplierPricesBySupplierIdRepositoryPg implements FindSupplierPricesBySupplierIdRepository {
  run = async (supplierId: string): Promise<SupplierPricesResponse | undefined> => {
    try {
      const supplierPriceEntity = getRepository(SupplierPricesEntity)
      const supplierPriceResponse = await supplierPriceEntity.findOne({
        where: { supplierId: supplierId }
      })
      return supplierPricesMapper(supplierPriceResponse)
    } catch (error) {
      console.error('FindSupplierPricesBySupplierIdRepositoryPg:::', error)
      throw new Error('Erro ao pesquisar o preço do fornecedor pelo id fornecedor')
    }
  }
}
