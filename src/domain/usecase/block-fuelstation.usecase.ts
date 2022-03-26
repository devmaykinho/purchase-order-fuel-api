import { BlockFuelStation, BlockFuelStationRepository } from '../interface'

export class BlockFuelStationUseCase implements BlockFuelStation {
  constructor (
    private readonly blockFuelStationRepository: BlockFuelStationRepository
  ) {}

  run = async (fuelStationId: number): Promise<void> => {
    await this.blockFuelStationRepository.run(fuelStationId)
  }
}
