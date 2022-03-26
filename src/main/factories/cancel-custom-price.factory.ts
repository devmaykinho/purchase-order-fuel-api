import { CancelCustomPriceUseCase } from '../../domain/usecase/cancel-custom-price.usecase'
import { CancelCustomPriceRepositoryPg } from '../../infra/repositories/postgres/repository'
import { CancelCutomPriceController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeCancelCustomPriceController = (): Controller => {
  const cancelCustomPriceRepository = new CancelCustomPriceRepositoryPg()
  const cancelCustomPriceUseCase = new CancelCustomPriceUseCase(
    cancelCustomPriceRepository
  )
  return new CancelCutomPriceController(cancelCustomPriceUseCase)
}
