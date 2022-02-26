import { CreateSupplierPrices } from '../../domain/interface/usecase/create-supplier-prices'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class CreateSupplierPricesController implements Controller {
  constructor (private readonly createSupplierPrices: CreateSupplierPrices) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.createSupplierPrices.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
