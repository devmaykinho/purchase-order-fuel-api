import { ListSuppliersUseCase } from '../../domain/usecase/list-luppliers.usecase'
import { ListSuppliersRepositoryPg } from '../../infra/repositories/postgres/repository'
import { ListSuppliersController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeListSuppliersController = (): Controller => {
  const listSuppliersRepository = new ListSuppliersRepositoryPg()
  const listSuppliersUseCase = new ListSuppliersUseCase(
    listSuppliersRepository
  )
  return new ListSuppliersController(listSuppliersUseCase)
}
