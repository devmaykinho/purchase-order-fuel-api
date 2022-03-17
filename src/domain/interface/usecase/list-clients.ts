import { ClientResponse } from '../../response/client.response'

export interface ListClients {
  run: () => Promise<ClientResponse[]>
}
