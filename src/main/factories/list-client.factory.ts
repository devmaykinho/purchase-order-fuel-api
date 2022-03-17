import { ListClientsUseCase } from '../../domain/usecase/list-clients.usecase'
import { FindClientRepositoryPg } from '../../infra/repositories/postgres/repository'
import { ListClientsController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeListClientController = (): Controller => {
  const findClientRepository = new FindClientRepositoryPg()
  const listClientUseCase = new ListClientsUseCase(
    findClientRepository
  )
  return new ListClientsController(listClientUseCase)
}
