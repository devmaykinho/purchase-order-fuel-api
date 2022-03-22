import { ListFuelStations, ListFuelStationRepository } from '../interface'
import { FuelStationResponse } from '../response'

export class ListFuelStationsUseCase implements ListFuelStations {
  constructor (
    private readonly listFuelStationRepository: ListFuelStationRepository
  ) {}

  run = async (): Promise<FuelStationResponse[] | undefined> => {
    return await this.listFuelStationRepository.run()
  }
}
