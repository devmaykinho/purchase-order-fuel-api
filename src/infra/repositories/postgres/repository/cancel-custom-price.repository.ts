import { getRepository } from 'typeorm'
import { CancelCustomPrice } from '../../../../domain/interface'
import { CustomPriceEntity } from '../entities'

export class CancelCustomPriceRepositoryPg implements CancelCustomPrice {
  run = async (customPriceId: number): Promise<void> => {
    try {
      const customPriceEntity = getRepository(CustomPriceEntity)
      await customPriceEntity.update(customPriceId, { isActive: 'NÃO' })
    } catch (error) {
      console.error('CancelCustomPriceRepositoryPg:::', error)
      throw new Error('Erro ao cancelar o preço custom')
    }
  }
}
