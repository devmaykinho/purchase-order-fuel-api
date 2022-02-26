import { makeSigninValidationFactory } from './signin-validation.factory'
import { RequiredFieldValidation, ValidationComposite } from '../../../domain/validations'

jest.mock('../../../domain/validations/validation-composite.validation')

const requiredFields = [
  'email',
  'password'
]

const validations = [
  new RequiredFieldValidation(requiredFields)
]

describe('SigninValidationFactory - Unit test', () => {
  it('should call all validations', () => {
    makeSigninValidationFactory()
    expect(ValidationComposite).toBeCalledWith(validations)
  })
})
