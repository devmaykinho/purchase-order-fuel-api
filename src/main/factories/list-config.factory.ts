import { ListConfigUseCase } from '../../domain/usecase/list-config.usecase'
import { ListConfigRepositoryPg } from '../../infra/repositories/postgres/repository'
import { ListConfigController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeListConfigController = (): Controller => {
  const listConfigRepository = new ListConfigRepositoryPg()
  const listConfigUseCase = new ListConfigUseCase(
    listConfigRepository
  )
  return new ListConfigController(listConfigUseCase)
}
