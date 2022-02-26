import { CustomPriceModel } from '../../models'

export interface CreateCustomPriceRepository {
  run: (customPrice: CustomPriceModel) => Promise<void>
}
