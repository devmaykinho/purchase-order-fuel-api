import { ActiveFuelStationUseCase } from '../../domain/usecase/active-fuelstation.usecase'
import { ActiveFuelStationRepositoryPg } from '../../infra/repositories/postgres/repository'
import { ActiveFuelStationController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeActiveFuelStationController = (): Controller => {
  const ActiveFuelStationRepository = new ActiveFuelStationRepositoryPg()
  const activeFuelStationUseCase = new ActiveFuelStationUseCase(
    ActiveFuelStationRepository
  )
  return new ActiveFuelStationController(activeFuelStationUseCase)
}
