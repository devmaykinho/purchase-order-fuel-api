import { getRepository } from 'typeorm'
import { CreateUserAdmRepository } from '../../../../domain/interface'
import { UserAdmModel } from '../../../../domain/models'
import { UserAdmEntity } from '../entities'

export class CreateUserAdmRepositoryPg implements CreateUserAdmRepository {
  run = async (user: UserAdmModel): Promise<void> => {
    try {
      const userAdmEntity = getRepository(UserAdmEntity)
      await userAdmEntity.save(user)
    } catch (error) {
      console.error('CreateUserAdmRepositoryPg:::', error)
      throw new Error('Erro ao criar o usuário Administrativo')
    }
  }
}
