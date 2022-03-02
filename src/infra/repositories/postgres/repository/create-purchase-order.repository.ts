import moment from 'moment'
import { getRepository } from 'typeorm'
import { CreatePurchaseOrderRepository } from '../../../../domain/interface'
import { PurchaseOrderModel } from '../../../../domain/models'
import { PurchaseOrderEntity } from '../entities'

export class CreatePurchaseOrderRepositoryPg implements CreatePurchaseOrderRepository {
  run = async (purchaseOrder: PurchaseOrderModel): Promise<void> => {
    try {
      const currentDate = new Date()
      const dateFormated = moment(currentDate).format('YYYY-MM-DD')
      const supplierEntity = getRepository(PurchaseOrderEntity)
      await supplierEntity.save({ ...purchaseOrder, createDate: dateFormated })
    } catch (error) {
      console.error('CreatePurchaseOrderRepositoryPg:::', error)
      throw new Error('Erro ao criar o pedido de compra')
    }
  }
}
