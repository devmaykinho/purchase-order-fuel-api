import { getRepository } from 'typeorm'
import { FindSupplierPricesByFilterRepository, FindSupplierPricesFilter } from '../../../../domain/interface'
import { SupplierPricesResponse } from '../../../../domain/response'
import { SupplierPricesEntity } from '../entities'
import { supplierPricesMapper } from '../mappers/supplier-prices.mapper'

export class FindSupplierPricesByFilterRepositoryPg implements FindSupplierPricesByFilterRepository {
  run = async (filter: FindSupplierPricesFilter): Promise<SupplierPricesResponse | undefined> => {
    try {
      const dynamicFilter: FindSupplierPricesFilter = {
        fuelType: filter.fuelType,
        deliveryType: filter.deliveryType,
        paymentType: filter.paymentType
      }
      if (filter.supplierId) {
        dynamicFilter.supplierId = filter.supplierId
      }
      const supplierPriceEntity = getRepository(SupplierPricesEntity)
      const supplierPriceResponse = await supplierPriceEntity.findOne({
        where: dynamicFilter
      })
      return supplierPricesMapper(supplierPriceResponse)
    } catch (error) {
      console.error('FindSupplierPricesByFilterRepositoryPg:::', error)
      throw new Error('Erro ao pesquisar o preço do fornecedor pelo filtro')
    }
  }
}
