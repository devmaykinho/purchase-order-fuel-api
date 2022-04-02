import { getRepository } from 'typeorm'
import { UpdateConfigRepository } from '../../../../domain/interface'
import { ConfigModel } from '../../../../domain/models'
import { ConfigEntity } from '../entities'

export class UpdateConfigRepositoryPg implements UpdateConfigRepository {
  run = async (config: ConfigModel): Promise<void> => {
    try {
      const configEntity = getRepository(ConfigEntity)
      await configEntity.save(config)
    } catch (error) {
      console.error('UpdateConfigRepositoryPg:::', error)
      throw new Error('Erro ao atulizar as configurações do sistema')
    }
  }
}
