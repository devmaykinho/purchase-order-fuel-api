import { DeleteSupplierPrices } from '../../domain/interface/usecase/delete-supplier-prices'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class DeleteSupplierPricesController implements Controller {
  constructor (private readonly deleteSupplierPrices: DeleteSupplierPrices) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const { priceId } = req.params
      const supplierPrices = await this.deleteSupplierPrices.run(priceId)
      return ok(supplierPrices)
    } catch (error) {
      return customError(error)
    }
  }
}
