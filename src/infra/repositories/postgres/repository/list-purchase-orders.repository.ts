import { PurchaseOrderEntity } from '../entities'
import { getRepository } from 'typeorm'
import { ListPurchaseOrderRepository } from '../../../../domain/interface'
import { PurchaseOrderResponse } from '../../../../domain/response'

export class ListPurchaseOrdersRepositoryPg implements ListPurchaseOrderRepository {
  run = async (): Promise<PurchaseOrderResponse[] | undefined> => {
    try {
      const purchaseOrderEntity = getRepository(PurchaseOrderEntity)
      return await purchaseOrderEntity.find()
    } catch (error) {
      console.error('ListPurchaseOrdersRepositoryPg:::', error)
      throw new Error('Error ao obter os pedidos de compra')
    }
  }
}
