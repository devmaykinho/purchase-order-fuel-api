import { CreateCustomPriceRepository, CreateCustomPrice, Validation, ValidationDuplicateRecord } from '../interface'
import { CustomPriceModel } from '../models'

export class CreateCustomPriceUseCase implements CreateCustomPrice {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly duplicateRecordValidation: ValidationDuplicateRecord,
    private readonly createCustomPriceRepository: CreateCustomPriceRepository
  ) {}

  run = async (customPrice: CustomPriceModel): Promise<void> => {
    await this.requiredFieldsValidation.validate(customPrice)
    await this.duplicateRecordValidation.validate(customPrice)
    await this.createCustomPriceRepository.run({ ...customPrice, isActive: 'SIM' })
  }
}
