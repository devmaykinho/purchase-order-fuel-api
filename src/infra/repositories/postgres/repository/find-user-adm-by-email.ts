import { UserAdmEntity } from '../entities'
import { getRepository } from 'typeorm'
import { FindUserAdmByEmailRepository } from '../../../../domain/interface'
import { UserAdmResponse } from '../../../../domain/response'

export class FindUserAdmByEmailRepositoryPg implements FindUserAdmByEmailRepository {
  run = async (email: string): Promise<UserAdmResponse | undefined> => {
    try {
      const userAdmEntity = getRepository(UserAdmEntity)
      return await userAdmEntity.findOne({ email })
    } catch (error) {
      console.error('FindUserAdmByEmailRepositoryPg:::', error)
      throw new Error('Error ao buscar o usuário administrativo.')
    }
  }
}
