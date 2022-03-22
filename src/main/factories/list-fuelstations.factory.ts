import { ListFuelStationsUseCase } from '../../domain/usecase/list-fuelstation.usecase'
import { ListFuelStationRepositoryPg } from '../../infra/repositories/postgres/repository'
import { ListFuelStationsController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeListFuelStationsController = (): Controller => {
  const listFuelStationRepository = new ListFuelStationRepositoryPg()
  const listFuelStationsUseCase = new ListFuelStationsUseCase(
    listFuelStationRepository
  )
  return new ListFuelStationsController(listFuelStationsUseCase)
}
