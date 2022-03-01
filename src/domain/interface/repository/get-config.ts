import { ConfigResponse } from '../../response'

export interface GetConfigRepository {
  run: () => Promise<ConfigResponse | undefined>
}
