import { makeSignupValidationFactory } from './signup-validation.factory'
import { RequiredFieldValidation, ComparePasswordValidation, ValidationComposite, HasNetworkValidation } from '../../../domain/validations'

jest.mock('../../../domain/validations/validation-composite.validation')

const requiredFields = [
  'name',
  'cnpj',
  'email',
  'telephone',
  'city',
  'district',
  'street',
  'fuelStationNumber',
  'cep',
  'flag',
  'isNetwork',
  'password',
  'passwordConfirmation'
]

const validations = [
  new RequiredFieldValidation(requiredFields),
  new ComparePasswordValidation(),
  new HasNetworkValidation()
]

describe('SignupValidationFactory - Unit test', () => {
  it('should call all validations', () => {
    makeSignupValidationFactory()
    expect(ValidationComposite).toBeCalledWith(validations)
  })
})
