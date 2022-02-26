import { MissingParamError } from '../../utils/error'
import { Validation } from '../interface'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly requiredFields: string[]) {}

  validate (input: any): void {
    for (const field of this.requiredFields) {
      if (!input[field]) {
        throw new MissingParamError(field)
      }
    }
  }
}
