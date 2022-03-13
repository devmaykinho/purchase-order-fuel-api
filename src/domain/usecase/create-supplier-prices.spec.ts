import { mock, MockProxy } from 'jest-mock-extended'
import { Validation, CreateSupplierPrices, CreateSupplierPricesRepository, ValidationDuplicateRecord } from '../interface'
import { CreateSupplierPricesUseCase } from './create-supplier-prices.usecase'
import { newSupplierPrices } from '../../utils/fixtures'

const supplierPrices = newSupplierPrices()

describe('CreateSupplierPrices - Unit test', () => {
  let requiredFieldsValidation: MockProxy<Validation>
  let createSupplierPricesRepository: MockProxy<CreateSupplierPricesRepository>
  let duplicateRecordValidation: MockProxy<ValidationDuplicateRecord>
  let createSupplierPricesUseCase: CreateSupplierPrices

  beforeAll(() => {
    requiredFieldsValidation = mock()
    createSupplierPricesRepository = mock()
    duplicateRecordValidation = mock()
    createSupplierPricesUseCase = new CreateSupplierPricesUseCase(
      requiredFieldsValidation,
      duplicateRecordValidation,
      createSupplierPricesRepository
    )
  })
  it('Shoul call all validations with correct values', async () => {
    await createSupplierPricesUseCase.run(supplierPrices)
    expect(requiredFieldsValidation.validate).toBeCalledWith(supplierPrices)
    expect(duplicateRecordValidation.validate).toBeCalledWith(supplierPrices.supplierId)
    expect(createSupplierPricesRepository.run).toBeCalledWith(supplierPrices)
  })

  it('Should return undefied if supplier prices is created with success', async () => {
    const result = await createSupplierPricesUseCase.run(supplierPrices)
    expect(result).toBeFalsy()
  })

  it('Should return an error repository throws', async () => {
    createSupplierPricesRepository.run.mockImplementation(() => { throw new Error('Any error') })
    await expect(createSupplierPricesUseCase.run(supplierPrices)).rejects.toThrow(new Error('Any error'))
  })
})
