import { ListFuelStations } from '../../domain/interface/usecase/list-fuelstation'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class ListFuelStationsController implements Controller {
  constructor (private readonly listFuelStations: ListFuelStations) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const fuelstations = await this.listFuelStations.run()
      return ok(fuelstations)
    } catch (error) {
      return customError(error)
    }
  }
}
