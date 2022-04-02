import { UpdateConfig, Validation, UpdateConfigRepository } from '../interface'
import { ConfigModel } from '../models'

export class UpdateConfigUseCase implements UpdateConfig {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly updateConfigRepository: UpdateConfigRepository
  ) {}

  run = async (config: ConfigModel): Promise<void> => {
    this.requiredFieldsValidation.validate(config)
    await this.updateConfigRepository.run(config)
  }
}
