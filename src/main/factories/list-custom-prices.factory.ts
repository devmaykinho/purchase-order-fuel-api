import { ListCustomPricesUseCase } from '../../domain/usecase/list-custom-price.usecase'
import { ListCustomPricesRepositoryPg } from '../../infra/repositories/postgres/repository'
import { ListCustomPricesController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeListCustomPricesController = (): Controller => {
  const listCustomPricesRepository = new ListCustomPricesRepositoryPg()
  const listCustomPricesUseCase = new ListCustomPricesUseCase(
    listCustomPricesRepository
  )
  return new ListCustomPricesController(listCustomPricesUseCase)
}
