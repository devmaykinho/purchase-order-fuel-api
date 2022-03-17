import { FindClientRepository } from '../interface'
import { ListClients } from '../interface/usecase/list-clients'
import { ClientResponse } from '../response'

export class ListClientsUseCase implements ListClients {
  constructor (
    private readonly findClientRepository: FindClientRepository
  ) {}

  run = async (): Promise<ClientResponse[]> => {
    return await this.findClientRepository.run()
  }
}
