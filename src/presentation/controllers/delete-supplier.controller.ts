import { DeleteSupplier } from '../../domain/interface/usecase/delete-supplier'
import { ok, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class DeleteSupplierController implements Controller {
  constructor (private readonly deleteSupplier: DeleteSupplier) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const { supplierId } = req.params
      await this.deleteSupplier.run(supplierId)
      return ok()
    } catch (error) {
      return customError(error)
    }
  }
}
