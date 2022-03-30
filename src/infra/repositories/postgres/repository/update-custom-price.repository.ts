import { getRepository } from 'typeorm'
import { UpdateCustomPriceRepository } from '../../../../domain/interface'
import { CustomPriceModel } from '../../../../domain/models'
import { CustomPriceEntity } from '../entities'

export class UpdateCustomPriceRepositoryPg implements UpdateCustomPriceRepository {
  run = async (customPrice: CustomPriceModel): Promise<void> => {
    try {
      const { id, ...priceUpdate } = customPrice
      const customPriceEntity = getRepository(CustomPriceEntity)
      await customPriceEntity.update({
        id: id
      }, {
        ...priceUpdate
      })
    } catch (error) {
      console.error('UpdateCustomPriceRepositoryPg:::', error)
      throw new Error('Erro ao atualizar o preço custom')
    }
  }
}
