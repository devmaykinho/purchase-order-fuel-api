import { getRepository } from 'typeorm'
import { FindClientRepository } from '../../../../domain/interface'
import { ClientResponse } from '../../../../domain/response'
import { ClientEntity } from '../entities'

export class FindClientRepositoryPg implements FindClientRepository {
  run = async (): Promise<ClientResponse[]> => {
    try {
      const clientPriceEntity = getRepository(ClientEntity)
      return await clientPriceEntity.find()
    } catch (error) {
      console.error('FindClientRepositoryPg:::', error)
      throw new Error('Erro ao buscar os clientes')
    }
  }
}
