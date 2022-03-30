import { UpdateCustomPriceRepository, UpdateCustomPrice, Validation, ValidationDuplicateRecord } from '../interface'
import { CustomPriceModel } from '../models'

export class UpdateCustomPriceUseCase implements UpdateCustomPrice {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly duplicateRecordValidation: ValidationDuplicateRecord,
    private readonly updateCustomPriceRepository: UpdateCustomPriceRepository
  ) {}

  run = async (customPrice: CustomPriceModel): Promise<void> => {
    this.requiredFieldsValidation.validate(customPrice)
    await this.duplicateRecordValidation.validate(customPrice)
    await this.updateCustomPriceRepository.run(customPrice)
  }
}
