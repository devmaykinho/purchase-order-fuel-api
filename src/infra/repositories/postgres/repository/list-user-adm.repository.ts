import { UserAdmEntity } from '../entities'
import { getRepository } from 'typeorm'
import { ListUserAdmRepository } from '../../../../domain/interface'
import { UserAdmResponse } from '../../../../domain/response'

export class ListUserAdmRepositoryPg implements ListUserAdmRepository {
  run = async (): Promise<UserAdmResponse[] | undefined> => {
    try {
      const userAdmEntity = getRepository(UserAdmEntity)
      return await userAdmEntity.find({ order: { id: 'ASC' } })
    } catch (error) {
      console.error('ListUserAdmRepositoryPg:::', error)
      throw new Error('Error ao obter os usuários administrativos')
    }
  }
}
