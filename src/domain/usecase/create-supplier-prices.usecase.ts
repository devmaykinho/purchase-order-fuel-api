import { CreateSupplierPrices, Validation } from '../interface'
import { CreateSupplierPricesRepository } from '../interface/repository/create-supplier-prices'
import { SupplierPricesModel } from '../models'

export class CreateSupplierPricesUseCase implements CreateSupplierPrices {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly createSupplierPricesRepository: CreateSupplierPricesRepository
  ) {}

  run = async (supplierPrices: SupplierPricesModel): Promise<void> => {
    this.requiredFieldsValidation.validate(supplierPrices)

    await this.createSupplierPricesRepository.run(supplierPrices)
  }
}
