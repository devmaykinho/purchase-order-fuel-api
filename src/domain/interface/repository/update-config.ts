import { ConfigModel } from '../../models'

export interface UpdateConfigRepository {
  run: (config: ConfigModel) => Promise<void>
}
