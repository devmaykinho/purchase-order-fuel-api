import { ConfigEntity } from '../entities'
import { getRepository } from 'typeorm'
import { ListConfigRepository } from '../../../../domain/interface'
import { ConfigResponse } from '../../../../domain/response'

export class ListConfigRepositoryPg implements ListConfigRepository {
  run = async (): Promise<ConfigResponse[] | undefined> => {
    try {
      const configEntity = getRepository(ConfigEntity)
      return await configEntity.find()
    } catch (error) {
      console.error('ListConfigRepositoryPg:::', error)
      throw new Error('Error ao obter as configurações do sistema')
    }
  }
}
