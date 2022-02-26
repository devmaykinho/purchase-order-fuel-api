import { mock, MockProxy } from 'jest-mock-extended'
import { Validation } from '../interface/validations/validation'
import { ValidationComposite } from './validation-composite.validation'

describe('ValidationComposite - Unit test', () => {
  let validationCompisite: Validation
  let requiredFieldValidation: MockProxy<Validation>
  let duplicateRecordValidation: MockProxy<Validation>
  let hasNetworkValidation: MockProxy<Validation>

  beforeAll(() => {
    requiredFieldValidation = mock()
    duplicateRecordValidation = mock()
    hasNetworkValidation = mock()
    validationCompisite = new ValidationComposite([
      requiredFieldValidation,
      duplicateRecordValidation,
      hasNetworkValidation
    ])
  })
  it('Should call all validations with correct values', () => {
    const anyParams = {}
    validationCompisite.validate(anyParams)
    expect(requiredFieldValidation.validate).toHaveBeenCalledWith(anyParams)
    expect(duplicateRecordValidation.validate).toHaveBeenCalledWith(anyParams)
    expect(hasNetworkValidation.validate).toHaveBeenCalledWith(anyParams)
  })
})
