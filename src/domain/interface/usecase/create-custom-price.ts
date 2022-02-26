import { CustomPriceModel } from '../../models'

export interface CreateCustomPrice {
  run: (customPrice: CustomPriceModel) => Promise<void>
}
