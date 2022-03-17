import { ClientModel } from '../../models/client'

export interface CreateClient {
  run: (client: ClientModel) => Promise<void>
}
