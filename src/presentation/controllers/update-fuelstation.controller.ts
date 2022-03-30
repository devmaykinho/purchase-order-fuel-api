import { UpdateFuelStation } from '../../domain/interface/usecase/update-fuelstation'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class UpdateFuelStationController implements Controller {
  constructor (private readonly updateFuelStation: UpdateFuelStation) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.updateFuelStation.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
