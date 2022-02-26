import { InvalidParamError } from '../../utils/error'
import { ComparePasswordValidation } from './compare-password.validation'

describe('Compare Password Adapter', () => {
  it('Should return undefied if password is equals passwordConfirmation', () => {
    const password = 'valid_password'
    const passwordConfirmation = 'valid_password'
    const camparePassword = new ComparePasswordValidation()
    expect(camparePassword.validate({ password, passwordConfirmation })).toBeFalsy()
  })
  it('Should throw InvalidParamError if password does not equals password confirmation', () => {
    const password = 'valid_password'
    const passwordConfirmation = 'invalid_password'
    const camparePassword = new ComparePasswordValidation()
    expect(() => camparePassword.validate({ password, passwordConfirmation })).toThrow(new InvalidParamError('passwordConfirmation'))
  })
})
