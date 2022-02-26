import { InvalidParamError } from '../../utils/error'
import { EmailValidation } from './email.validation'

describe('Email Validator Adapter', () => {
  it('Should return undefined if email is valid', () => {
    const emailValidator = new EmailValidation()
    expect(emailValidator.validate({ email: 'teste@teste.com' })).toBeFalsy()
  })
  it('Should throw InvalidParamError if email is invalid', () => {
    const emailValidator = new EmailValidation()
    expect(() => emailValidator.validate({ email: 'invalid_email' })).toThrow(new InvalidParamError('email'))
  })
})
