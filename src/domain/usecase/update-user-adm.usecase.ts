import { UpdateUserAdm, Validation, UpdateUserAdmRepository, ValidationDuplicateRecord } from '../interface'
import { UserAdmModel } from '../models'

export class UpdateUserAdmUseCase implements UpdateUserAdm {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly duplicateRecordValidation: ValidationDuplicateRecord,
    private readonly updateUserAdmRepository: UpdateUserAdmRepository
  ) {}

  run = async (userRequest: UserAdmModel): Promise<void> => {
    this.requiredFieldsValidation.validate(userRequest)
    await this.duplicateRecordValidation.validate(userRequest)
    await this.updateUserAdmRepository.run(userRequest)
  }
}
