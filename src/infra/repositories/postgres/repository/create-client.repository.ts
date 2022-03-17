import { getRepository } from 'typeorm'
import { CreateClientRepository } from '../../../../domain/interface'
import { ClientModel } from '../../../../domain/models'
import { ClientEntity } from '../entities'

export class CreateClientRepositoryPg implements CreateClientRepository {
  run = async (client: ClientModel): Promise<void> => {
    try {
      const clientEntity = getRepository(ClientEntity)
      await clientEntity.save(client)
    } catch (error) {
      console.error('CreateClientRepositoryPg:::', error)
      throw new Error('Error ao criar o client.')
    }
  }
}
