import { UpdateFuelStationRepository, UpdateFuelStation, Validation, ValidationDuplicateRecord } from '../interface'
import { FuelStation } from '../models'

export class UpdateFuelStationUseCase implements UpdateFuelStation {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly duplicateRecordValidation: ValidationDuplicateRecord,
    private readonly updateFuelStationRepository: UpdateFuelStationRepository
  ) {}

  run = async (fuelStationModel: FuelStation): Promise<void> => {
    this.requiredFieldsValidation.validate(fuelStationModel)
    await this.duplicateRecordValidation.validate(fuelStationModel)
    await this.updateFuelStationRepository.run(fuelStationModel)
  }
}
