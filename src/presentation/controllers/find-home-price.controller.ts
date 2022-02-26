import { FindHomePrice } from '../../domain/interface/usecase/find-home-price'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class FindHomePriceController implements Controller {
  constructor (private readonly findHomePrice: FindHomePrice) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const { fuelStationId } = req.params
      const result = await this.findHomePrice.run(fuelStationId)
      return ok(result)
    } catch (error) {
      return customError(error)
    }
  }
}
