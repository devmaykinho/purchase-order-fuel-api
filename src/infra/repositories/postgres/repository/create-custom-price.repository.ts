import { getRepository } from 'typeorm'
import { CreateCustomPriceRepository } from '../../../../domain/interface'
import { CustomPriceModel } from '../../../../domain/models'
import { CustomPriceEntity } from '../entities'

export class CreateCustomPriceRepositoryPg implements CreateCustomPriceRepository {
  run = async (customPrice: CustomPriceModel): Promise<void> => {
    try {
      const customPriceEntity = getRepository(CustomPriceEntity)
      await customPriceEntity.save(customPrice)
    } catch (error) {
      console.error('CreateCustomPriceRepositoryPg:::', error)
      throw new Error('Erro ao criar custom price')
    }
  }
}
