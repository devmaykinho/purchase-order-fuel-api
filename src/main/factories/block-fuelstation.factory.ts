import { BlockFuelStationUseCase } from '../../domain/usecase/block-fuelstation.usecase'
import { BlockFuelStationRepositoryPg } from '../../infra/repositories/postgres/repository'
import { BlockFuelStationController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'

export const makeBlockFuelStationController = (): Controller => {
  const blockFuelStationRepository = new BlockFuelStationRepositoryPg()
  const blockFuelStationUseCase = new BlockFuelStationUseCase(
    blockFuelStationRepository
  )
  return new BlockFuelStationController(blockFuelStationUseCase)
}
