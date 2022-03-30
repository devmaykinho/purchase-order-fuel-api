import { UpdateSupplier } from '../../domain/interface/usecase/update-supplier'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class UpdateSupplierController implements Controller {
  constructor (private readonly updateSupplier: UpdateSupplier) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.updateSupplier.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
