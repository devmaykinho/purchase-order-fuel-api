import { getRepository } from 'typeorm'
import { FindSupplierPricesByFilterRepository, FindSupplierPricesFilter } from '../../../../domain/interface'
import { SupplierPricesResponse } from '../../../../domain/response'
import { SupplierPricesEntity } from '../entities'
import { supplierPricesMapper } from '../mappers/supplier-prices.mapper'
import { FindActiveSupplierRepositoryPg } from './find-active-supplier.repository'

export class FindSupplierPricesByFilterRepositoryPg implements FindSupplierPricesByFilterRepository {
  run = async (filter: FindSupplierPricesFilter): Promise<SupplierPricesResponse | undefined> => {
    try {
      const findSupplierRepository = new FindActiveSupplierRepositoryPg()
      const supplier = await findSupplierRepository.run()
      const supplierPriceEntity = getRepository(SupplierPricesEntity)
      const supplierPriceResponse = await supplierPriceEntity.findOne({
        where: {
          fuelType: filter.fuelType,
          deliveryType: filter.deliveryType,
          paymentType: filter.paymentType,
          supplierId: supplier?.id
        }
      })
      return supplierPricesMapper(supplierPriceResponse)
    } catch (error) {
      console.error('FindSupplierPricesByFilterRepositoryPg:::', error)
      throw new Error('Erro ao pesquisar o preço do fornecedor pelo filtro')
    }
  }
}
