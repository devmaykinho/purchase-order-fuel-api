import { InvalidParamError } from '../../utils/error'
import { Validation } from '../interface/validations'

export class FindHomePriceValidation implements Validation {
  validate (fuelStationId: string): void {
    if (!fuelStationId) {
      throw new InvalidParamError('fuelStationId')
    }
  }
}
