import { BlockFuelStation } from '../../domain/interface/usecase/block-fuelstation'
import { ok, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class BlockFuelStationController implements Controller {
  constructor (private readonly blockFuelStation: BlockFuelStation) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const { fuelStationId } = req.params
      await this.blockFuelStation.run(fuelStationId)
      return ok()
    } catch (error) {
      return customError(error)
    }
  }
}
