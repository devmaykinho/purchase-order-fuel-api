import { InvalidParamError } from '../../utils/error'
import { Validation } from '../interface'

export class ComparePasswordValidation implements Validation {
  validate (input: any): void {
    if (input.password !== input.passwordConfirmation) {
      throw new InvalidParamError('passwordConfirmation')
    }
  }
}
