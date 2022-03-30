import { UpdateSupplier, UpdateSupplierRepository, Validation } from '../interface'
import { SupplierModel } from '../models/supplier'

export class UpdateSupplierUseCase implements UpdateSupplier {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly updateSupplierRepository: UpdateSupplierRepository
  ) {}

  run = async (supplier: SupplierModel): Promise<void> => {
    this.requiredFieldsValidation.validate(supplier)
    await this.updateSupplierRepository.run(supplier)
  }
}
