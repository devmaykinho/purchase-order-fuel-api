import { CreateCustomPrice } from '../../domain/interface/usecase/create-custom-price'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class CreateCustomPriceController implements Controller {
  constructor (private readonly createCustomPrice: CreateCustomPrice) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.createCustomPrice.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
