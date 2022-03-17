import { ListClients } from '../../domain/interface/usecase/list-clients'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class ListClientsController implements Controller {
  constructor (private readonly listClients: ListClients) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const clients = await this.listClients.run()
      return ok(clients)
    } catch (error) {
      return customError(error)
    }
  }
}
