import { getRepository } from 'typeorm'
import { UpdateUserAdmRepository } from '../../../../domain/interface'
import { UserAdmModel } from '../../../../domain/models'
import { UserAdmEntity } from '../entities'

export class UpdateUserAdmRepositoryPg implements UpdateUserAdmRepository {
  run = async (user: UserAdmModel): Promise<void> => {
    try {
      const userAdmEntity = getRepository(UserAdmEntity)
      await userAdmEntity.save(user)
    } catch (error) {
      console.error('UpdateUserAdmRepositoryPg:::', error)
      throw new Error('Erro ao atulizar o usuário Administrativo')
    }
  }
}
