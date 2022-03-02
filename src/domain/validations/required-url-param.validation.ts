import { MissingParamError } from '../../utils/error'
import { Validation } from '../interface'

export class RequiredUrlParamValidation implements Validation {
  validate (param): void {
    if (!param) {
      throw new MissingParamError(param)
    }
  }
}
