import { CustomPriceModel } from '../../models'

export interface UpdateCustomPriceRepository {
  run: (customPrice: CustomPriceModel) => Promise<void>
}
