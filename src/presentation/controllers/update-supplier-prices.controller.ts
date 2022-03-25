import { UpdateSupplierPrices } from '../../domain/interface/usecase/update-supplier-prices'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class UpdateSupplierPricesController implements Controller {
  constructor (private readonly updateSupplierPrices: UpdateSupplierPrices) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.updateSupplierPrices.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
