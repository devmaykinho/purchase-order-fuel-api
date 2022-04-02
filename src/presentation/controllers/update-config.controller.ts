import { UpdateConfig } from '../../domain/interface/usecase/update-config'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class UpdateConfigController implements Controller {
  constructor (private readonly updateConfig: UpdateConfig) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.updateConfig.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
