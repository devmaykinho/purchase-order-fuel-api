import { ListSupplierPrices } from '../../domain/interface/usecase/list-supplier-prices'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class ListSupplierPricesController implements Controller {
  constructor (private readonly listSupplierPrices: ListSupplierPrices) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const supplierPrices = await this.listSupplierPrices.run()
      return ok(supplierPrices)
    } catch (error) {
      return customError(error)
    }
  }
}
