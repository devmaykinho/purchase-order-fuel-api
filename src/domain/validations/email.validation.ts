import validator from 'validator'
import { InvalidParamError } from '../../utils/error'
import { Validation } from '../interface/validations'

export class EmailValidation implements Validation {
  validate (input: any): void {
    if (!validator.isEmail(input.email)) {
      throw new InvalidParamError('email')
    }
  }
}
