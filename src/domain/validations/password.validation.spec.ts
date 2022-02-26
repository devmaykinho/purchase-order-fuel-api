import { InvalidParamError } from '../../utils/error'
import { PasswordValidation } from './password.validation'

describe('Password Validator Adapter', () => {
  it('Should return undefined if password is valid format', () => {
    const passwordValidator = new PasswordValidation()
    expect(passwordValidator.validate({ password: 'Teste123' })).toBeFalsy()
  })
  it('Should throw InvalidParamError if password is invalid format', () => {
    const passwordValidator = new PasswordValidation()
    expect(() => passwordValidator.validate({ password: 'invalid_password' })).toThrow(new InvalidParamError('password'))
  })
})
