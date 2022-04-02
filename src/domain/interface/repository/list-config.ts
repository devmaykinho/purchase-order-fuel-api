import { ConfigResponse } from '../../response/config.response'

export interface ListConfigRepository {
  run: () => Promise<ConfigResponse[] | undefined>
}
