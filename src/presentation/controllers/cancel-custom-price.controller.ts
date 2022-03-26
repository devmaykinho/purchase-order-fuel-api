import { CancelCustomPrice } from '../../domain/interface/usecase/cancel-custom-price'
import { ok, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class CancelCutomPriceController implements Controller {
  constructor (private readonly cancelCustomPrice: CancelCustomPrice) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const { customPriceId } = req.params
      await this.cancelCustomPrice.run(customPriceId)
      return ok()
    } catch (error) {
      return customError(error)
    }
  }
}
