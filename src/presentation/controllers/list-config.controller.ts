import { ListConfig } from '../../domain/interface/usecase/list-config'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class ListConfigController implements Controller {
  constructor (private readonly listConfig: ListConfig) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const config = await this.listConfig.run()
      return ok(config)
    } catch (error) {
      return customError(error)
    }
  }
}
