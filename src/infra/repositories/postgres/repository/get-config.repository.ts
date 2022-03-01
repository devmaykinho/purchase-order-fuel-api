import { getRepository } from 'typeorm'
import { GetConfigRepository } from '../../../../domain/interface'
import { ConfigResponse } from '../../../../domain/response'
import { ConfigEntity } from '../entities'

export class GetConfigRepositoryPg implements GetConfigRepository {
  run = async (): Promise<ConfigResponse | undefined> => {
    try {
      const configEntityEntity = getRepository(ConfigEntity)
      const customPriceResponse = await configEntityEntity.find()
      return customPriceResponse[0]
    } catch (error) {
      console.error('GetConfigRepositoryPg:::', error)
      throw new Error('Erro ao obter as configurações')
    }
  }
}
