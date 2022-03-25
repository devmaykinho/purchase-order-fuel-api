import { ListCustomPrices } from '../../domain/interface/usecase/list-custom-prices'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class ListCustomPricesController implements Controller {
  constructor (private readonly listCustomPrices: ListCustomPrices) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const customPrices = await this.listCustomPrices.run()
      return ok(customPrices)
    } catch (error) {
      return customError(error)
    }
  }
}
