import { CreateCustomPriceRepository, CreateCustomPrice, Validation } from '../interface'
import { CustomPriceModel } from '../models'

export class CreateCustomPriceUseCase implements CreateCustomPrice {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly createCustomPriceRepository: CreateCustomPriceRepository
  ) {}

  run = async (customPrice: CustomPriceModel): Promise<void> => {
    await this.requiredFieldsValidation.validate(customPrice)
    await this.createCustomPriceRepository.run(customPrice)
  }
}
