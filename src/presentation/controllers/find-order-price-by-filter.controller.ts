import { FindOrderPriceByFilter } from '../../domain/interface/usecase/find-order-price-by-filter'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class FindOrderPriceByFilterController implements Controller {
  constructor (private readonly findOrderPriceByFilter: FindOrderPriceByFilter) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const result = await this.findOrderPriceByFilter.run(req.body)
      return ok(result)
    } catch (error) {
      return customError(error)
    }
  }
}
