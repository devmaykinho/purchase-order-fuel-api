import { ClientResponse } from '../../response'

export interface FindClientRepository {
  run: () => Promise<ClientResponse[]>
}
