import { CancelPurchaseOrder } from '../../domain/interface/usecase/cancel-purchase-order'
import { ok, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class CancelPurchaseOrderController implements Controller {
  constructor (private readonly cancelPurchaseOrder: CancelPurchaseOrder) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const { purchaseOrderId } = req.params
      await this.cancelPurchaseOrder.run(purchaseOrderId)
      return ok()
    } catch (error) {
      return customError(error)
    }
  }
}
