import { UpdateSupplierPrices, Validation, ValidationDuplicateRecord, UpdateSupplierPricesRepository } from '../interface'
import { SupplierPricesModel } from '../models'

export class UpdateSupplierPricesUseCase implements UpdateSupplierPrices {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly duplicateRecordValidation: ValidationDuplicateRecord,
    private readonly updateSupplierPricesRepository: UpdateSupplierPricesRepository
  ) {}

  run = async (supplierPrices: SupplierPricesModel): Promise<void> => {
    this.requiredFieldsValidation.validate(supplierPrices)
    await this.duplicateRecordValidation.validate(supplierPrices)
    await this.updateSupplierPricesRepository.run(supplierPrices)
  }
}
