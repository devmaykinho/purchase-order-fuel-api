import { ActiveFuelStation } from '../../domain/interface/usecase/active-fuelstation'
import { ok, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class ActiveFuelStationController implements Controller {
  constructor (private readonly ActiveFuelStation: ActiveFuelStation) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const { fuelStationId } = req.params
      await this.ActiveFuelStation.run(fuelStationId)
      return ok()
    } catch (error) {
      return customError(error)
    }
  }
}
