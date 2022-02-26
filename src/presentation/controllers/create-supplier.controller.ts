import { CreateSupplier } from '../../domain/interface/usecase/create-supplier'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class CreateSupplierController implements Controller {
  constructor (private readonly createSupplier: CreateSupplier) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.createSupplier.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
