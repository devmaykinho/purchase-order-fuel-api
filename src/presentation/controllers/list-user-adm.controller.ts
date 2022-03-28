import { ListUserAdm } from '../../domain/interface/usecase/list-user-adm'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class ListUserAdmController implements Controller {
  constructor (private readonly listUserAdm: ListUserAdm) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const user = await this.listUserAdm.run()
      return ok(user)
    } catch (error) {
      return customError(error)
    }
  }
}
