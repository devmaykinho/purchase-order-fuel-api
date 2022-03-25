import { CustomPriceEntity } from '../entities'
import { getRepository } from 'typeorm'
import { ListCustomPricesRepository } from '../../../../domain/interface'
import { CustomPriceResponse } from '../../../../domain/response'

export class ListCustomPricesRepositoryPg implements ListCustomPricesRepository {
  run = async (): Promise<CustomPriceResponse[] | undefined> => {
    try {
      const customPriceEntity = getRepository(CustomPriceEntity)
      return await customPriceEntity.find({ order: { id: 'ASC' } })
    } catch (error) {
      console.error('ListCustomPricesRepositoryPg:::', error)
      throw new Error('Error ao obter os os preços customizados')
    }
  }
}
