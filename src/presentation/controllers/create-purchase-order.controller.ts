import { CreatePurchaseOrder } from '../../domain/interface/usecase/create-purchase-order'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class CreatePurchaseOrderController implements Controller {
  constructor (private readonly createPurchaseOrderUseCase: CreatePurchaseOrder) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.createPurchaseOrderUseCase.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
