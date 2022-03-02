import { FindPurchaseOrderByFilter } from '../../domain/interface/usecase/find-purchase-order-by-filter'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class FindPurchaseOrderByFilterController implements Controller {
  constructor (private readonly findPurchaseOrderByFilter: FindPurchaseOrderByFilter) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const { fuelStationId } = req.params
      const result = await this.findPurchaseOrderByFilter.run(fuelStationId)
      return ok(result)
    } catch (error) {
      return customError(error)
    }
  }
}
