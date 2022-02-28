import { MockProxy, mock } from 'jest-mock-extended'
import { CreateCustomPriceUseCase } from './create-custom-price.usecase'
import { Validation, CreateCustomPriceRepository, CreateCustomPrice, ValidationDuplicateRecord } from '../interface'
import { newCustomPrice } from '../../utils/fixtures'

const customPrice = newCustomPrice()

describe('CreateCustomPrice - Unit test', () => {
  let requiredFieldsValidation: MockProxy<Validation>
  let duplicateRecordValidation: MockProxy<ValidationDuplicateRecord>
  let createCustomPriceRepository: MockProxy<CreateCustomPriceRepository>
  let createCustomPriceUseCase: CreateCustomPrice

  beforeAll(() => {
    requiredFieldsValidation = mock()
    duplicateRecordValidation = mock()
    createCustomPriceRepository = mock()
    createCustomPriceUseCase = new CreateCustomPriceUseCase(
      requiredFieldsValidation,
      duplicateRecordValidation,
      createCustomPriceRepository
    )
  })

  it('Shoul call all dependecies with correct values', async () => {
    await createCustomPriceUseCase.run(customPrice)
    expect(requiredFieldsValidation.validate).toHaveBeenCalledWith(customPrice)
    expect(duplicateRecordValidation.validate).toHaveBeenCalledWith(customPrice)
    expect(createCustomPriceRepository.run).toHaveBeenCalledWith(customPrice)
  })
})
