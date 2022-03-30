import { UpdateCustomPrice } from '../../domain/interface/usecase/update-custom-price'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class UpdateCustomPriceController implements Controller {
  constructor (private readonly updateCustomPrice: UpdateCustomPrice) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.updateCustomPrice.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
