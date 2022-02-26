import { getRepository } from 'typeorm'
import { CreatePurchaseOrderRepository } from '../../../../domain/interface'
import { PurchaseOrderModel } from '../../../../domain/models'
import { PurchaseOrderEntity } from '../entities'

export class CreatePurchaseOrderRepositoryPg implements CreatePurchaseOrderRepository {
  run = async (purchaseOrder: PurchaseOrderModel): Promise<void> => {
    const supplierEntity = getRepository(PurchaseOrderEntity)
    await supplierEntity.save(purchaseOrder)
  }
}
