import { MissingParamError } from '../../utils/error'
import { RequiredFieldValidation } from './required-field.validation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation(['email', 'password'])
}

describe('RequeridField Validator Adapter', () => {
  it('Should return undefined if values is correct', () => {
    const sut = makeSut()
    expect(sut.validate({ email: 'valid_email', password: 'valid_password' })).toBeFalsy()
  })

  it('Should throw MissingParam if email is not provided', () => {
    const sut = makeSut()
    expect(() => sut.validate({ password: 'invalid_password' })).toThrow(new MissingParamError('email'))
  })

  it('Should throw MissingParam if password is not provided', () => {
    const sut = makeSut()
    expect(() => sut.validate({ email: 'valida_email' })).toThrow(new MissingParamError('password'))
  })
})
