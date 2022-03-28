import { CreateUserAdm, Validation, CreateUserAdmRepository, ValidationDuplicateRecord, HashPassword } from '../interface'
import { UserAdmModel } from '../models'

export class CreateUserAdmUseCase implements CreateUserAdm {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly duplicateRecordValidation: ValidationDuplicateRecord,
    private readonly createUserAdmRepository: CreateUserAdmRepository,
    private readonly generationPasswordHash: HashPassword
  ) {}

  run = async (userRequest: UserAdmModel): Promise<void> => {
    this.requiredFieldsValidation.validate(userRequest)
    await this.duplicateRecordValidation.validate(userRequest)

    const passwordHashed = await this.generationPasswordHash.hash(userRequest.password)

    const user: UserAdmModel = { ...userRequest, isActive: 'SIM', password: passwordHashed }

    await this.createUserAdmRepository.run(user)
  }
}
