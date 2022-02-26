import { InvalidParamError } from '../../utils/error'
import { Validation } from '../interface/validations'

export class PasswordValidation implements Validation {
  validate (input: any): void {
    // should contain at least one digit
    // should contain at least one lower case
    // should contain at least one upper case
    // should contain at least 8 from the mentioned characters
    const validFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    if (!validFormat.test(input.password)) {
      throw new InvalidParamError('password')
    }
  }
}
