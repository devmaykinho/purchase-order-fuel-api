import { PurchaseOrderEntity } from '../entities'
import { getRepository } from 'typeorm'
import { FindPurchaseOrderByFilterRepository } from '../../../../domain/interface'
import { PurchaseOrderResponse } from '../../../../domain/response'
import { purchaseOrderMapper } from '../mappers/list-purchase-order.mapper'

export class FindPurchaseOrderByFilterRepositoryPg implements FindPurchaseOrderByFilterRepository {
  run = async (fuelStationId: number): Promise<PurchaseOrderResponse[] | undefined> => {
    try {
      const purchaseOrderEntity = getRepository(PurchaseOrderEntity)
      const purchaseOrders = await purchaseOrderEntity.find({ fuelStationId })
      return purchaseOrderMapper(purchaseOrders)
    } catch (error) {
      console.error('FindPurchaseOrderByFilterRepositoryPg:::', error)
      throw new Error('Error ao obter os pedidos referente ao posto logado.')
    }
  }
}
