import { OrderPriceFilterModel } from '../../models'
import { OrderPriceFilterResponse } from '../../response'

export interface FindOrderPriceByFilter {
  run: (filter: OrderPriceFilterModel) => Promise<OrderPriceFilterResponse | undefined>
}
