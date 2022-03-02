import { PurchaseOrderEntity } from '../entities'
import { getRepository } from 'typeorm'
import { FindPurchaseOrderByFilterRepository } from '../../../../domain/interface'
import { PurchaseOrderResponse } from '../../../../domain/response'

export class FindPurchaseOrderByFilterRepositoryPg implements FindPurchaseOrderByFilterRepository {
  run = async (fuelStationId: number): Promise<PurchaseOrderResponse[]> => {
    try {
      const purchaseOrderEntity = getRepository(PurchaseOrderEntity)
      return await purchaseOrderEntity.find({ fuelStationId })
    } catch (error) {
      console.error('FindPurchaseOrderByFilterRepositoryPg:::', error)
      throw new Error('Error ao obter os pedidos referente ao posto logado.')
    }
  }
}
