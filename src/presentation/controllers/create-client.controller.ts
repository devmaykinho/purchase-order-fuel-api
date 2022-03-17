import { CreateClient } from '../../domain/interface/usecase/create-client'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class CreateClientController implements Controller {
  constructor (private readonly createClient: CreateClient) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.createClient.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
