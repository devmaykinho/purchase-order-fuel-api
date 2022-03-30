import { ActiveFuelStation, ActiveFuelStationRepository } from '../interface'

export class ActiveFuelStationUseCase implements ActiveFuelStation {
  constructor (
    private readonly activeFuelStationRepository: ActiveFuelStationRepository
  ) {}

  run = async (fuelStationId: number): Promise<void> => {
    await this.activeFuelStationRepository.run(fuelStationId)
  }
}
