import { CreateSupplierPrices, Validation, ValidationDuplicateRecord } from '../interface'
import { CreateSupplierPricesRepository } from '../interface/repository/create-supplier-prices'
import { SupplierPricesModel } from '../models'

export class CreateSupplierPricesUseCase implements CreateSupplierPrices {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly duplicateRecordValidation: ValidationDuplicateRecord,
    private readonly createSupplierPricesRepository: CreateSupplierPricesRepository
  ) {}

  run = async (supplierPrices: SupplierPricesModel): Promise<void> => {
    this.requiredFieldsValidation.validate(supplierPrices)
    await this.duplicateRecordValidation.validate(supplierPrices)
    await this.createSupplierPricesRepository.run(supplierPrices)
  }
}
