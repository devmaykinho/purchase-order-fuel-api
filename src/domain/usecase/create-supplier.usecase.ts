import { CreateSupplier, Validation } from '../interface'
import { SupplierModel } from '../models/supplier'
import { CreateSupplierRepository } from '../interface/repository'

export class CreateSupplierUseCase implements CreateSupplier {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly createSupplierRepository: CreateSupplierRepository
  ) {}

  run = async (supplier: SupplierModel): Promise<void> => {
    this.requiredFieldsValidation.validate(supplier)

    await this.createSupplierRepository.run(supplier)
  }
}
