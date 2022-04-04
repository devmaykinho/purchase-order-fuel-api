import { PurchaseOrderEntity } from '../entities'
import { getRepository } from 'typeorm'
import { ListPurchaseOrderRepository } from '../../../../domain/interface'
import { PurchaseOrderResponse } from '../../../../domain/response'
import { purchaseOrderMapper } from '../mappers/list-purchase-order.mapper'

export class ListPurchaseOrdersRepositoryPg implements ListPurchaseOrderRepository {
  run = async (): Promise<PurchaseOrderResponse[] | undefined> => {
    try {
      const purchaseOrderEntity = getRepository(PurchaseOrderEntity)
      const purchaserOrders = await purchaseOrderEntity.find({ order: { id: 'ASC' } })
      console.log('purchaserOrders', purchaserOrders)
      return purchaseOrderMapper(purchaserOrders)
    } catch (error) {
      console.error('ListPurchaseOrdersRepositoryPg:::', error)
      throw new Error('Error ao obter os pedidos de compra')
    }
  }
}
