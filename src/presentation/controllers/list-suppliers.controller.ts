import { ListSuppliers } from '../../domain/interface/usecase/list-suppliers'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class ListSuppliersController implements Controller {
  constructor (private readonly listSuppliers: ListSuppliers) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const suppliers = await this.listSuppliers.run()
      return ok(suppliers)
    } catch (error) {
      return customError(error)
    }
  }
}
