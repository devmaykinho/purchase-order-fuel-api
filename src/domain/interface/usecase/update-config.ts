import { ConfigModel } from '../../models'

export interface UpdateConfig {
  run: (config: ConfigModel) => Promise<void>
}
