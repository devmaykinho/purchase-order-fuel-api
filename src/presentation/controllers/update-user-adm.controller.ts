import { UpdateUserAdm } from '../../domain/interface/usecase/update-user-adm'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class UpdateUserAdmController implements Controller {
  constructor (private readonly updateUserAdm: UpdateUserAdm) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.updateUserAdm.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
