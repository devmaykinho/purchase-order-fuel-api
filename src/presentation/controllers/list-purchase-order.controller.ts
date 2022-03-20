import { ListPurchaseOrders } from '../../domain/interface/usecase/list-purchase-order'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class ListPurchaseOrdersController implements Controller {
  constructor (private readonly listPurchaseOrders: ListPurchaseOrders) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const orders = await this.listPurchaseOrders.run()
      return ok(orders)
    } catch (error) {
      return customError(error)
    }
  }
}
