import { ClientModel } from '../../models/client'

export interface CreateClientRepository {
  run: (client: ClientModel) => Promise<void>
}
