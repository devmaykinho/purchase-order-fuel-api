import { ListUserAdmUseCase } from '../../domain/usecase/list-user-adm.usecase'
import { ListUserAdmRepositoryPg } from '../../infra/repositories/postgres/repository'
import { ListUserAdmController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeListUserAdmController = (): Controller => {
  const listUserAdmRepository = new ListUserAdmRepositoryPg()
  const listUserAdmUseCase = new ListUserAdmUseCase(
    listUserAdmRepository
  )
  return new ListUserAdmController(listUserAdmUseCase)
}
