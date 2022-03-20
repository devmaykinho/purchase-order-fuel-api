import { getRepository } from 'typeorm'
import { CancelPurchaseOrderRepository } from '../../../../domain/interface'
import { PurchaseOrderEntity } from '../entities'

export class CancelPurchaseOrderRepositoryPg implements CancelPurchaseOrderRepository {
  run = async (purchaseOrderId: number): Promise<void> => {
    try {
      const purchaseOrderEntity = getRepository(PurchaseOrderEntity)
      await purchaseOrderEntity.update(purchaseOrderId, { status: 'CANCELADO' })
    } catch (error) {
      console.error('CancelPurchaseOrderRepositoryPg:::', error)
      throw new Error('Erro ao cancelar o pedido de compra')
    }
  }
}
