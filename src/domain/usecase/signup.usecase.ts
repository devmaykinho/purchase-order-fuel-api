import { Signup } from '../interface/usecase/signup'
import { CreateFuelStationRepository, Validation, ValidationDuplicateRecord, HashPassword } from '../interface'
import { FuelStation } from '../models'

export class SignupUseCase implements Signup {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly duplicateRecordValidation: ValidationDuplicateRecord,
    private readonly createFuelStationRepository: CreateFuelStationRepository,
    private readonly generationPasswordHash: HashPassword
  ) {}

  run = async (fuelStationModel: FuelStation): Promise<void> => {
    this.requiredFieldsValidation.validate(fuelStationModel)
    this.duplicateRecordValidation.validate(fuelStationModel)

    const passwordHashed = await this.generationPasswordHash.hash(fuelStationModel.password)

    const fuelStation: FuelStation = { ...fuelStationModel, status: 'PEDING', password: passwordHashed }

    await this.createFuelStationRepository.run(fuelStation)
  }
}
