import { ConfigResponse } from '../../response/config.response'

export interface ListConfig {
  run: () => Promise<ConfigResponse[] | undefined>
}
