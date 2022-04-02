import { ListConfigRepository, ListConfig } from '../interface'
import { ConfigResponse } from '../response'

export class ListConfigUseCase implements ListConfig {
  constructor (
    private readonly listConfigRepository: ListConfigRepository
  ) {}

  run = async (): Promise<ConfigResponse[] | undefined> => {
    return await this.listConfigRepository.run()
  }
}
