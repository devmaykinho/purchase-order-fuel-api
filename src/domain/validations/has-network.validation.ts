import { MissingParamError } from '../../utils/error'
import { Validation } from '../interface'

export class HasNetworkValidation implements Validation {
  validate (input: any): void {
    if (input.isNetwork === 'SIM' && !input.networkName) {
      throw new MissingParamError('networkName')
    }
  }
}
