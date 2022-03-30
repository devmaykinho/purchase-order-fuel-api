import { CustomPriceModel } from '../../models'

export interface UpdateCustomPrice {
  run: (customPrice: CustomPriceModel) => Promise<void>
}
