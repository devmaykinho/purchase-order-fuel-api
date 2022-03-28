import { CreateUserAdm } from '../../domain/interface/usecase/create-user-adm'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class CreateUserAdmController implements Controller {
  constructor (private readonly createUserAdm: CreateUserAdm) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.createUserAdm.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
