import { DuplicateRecordError } from '../../utils/error'
import { FindUserAdmByEmailRepository, ValidationDuplicateRecord } from '../interface'

export class DuplicateUserAdmValidation implements ValidationDuplicateRecord {
  constructor (private readonly findUserAdmByEmailRepository: FindUserAdmByEmailRepository) {}
  validate = async (input: any): Promise<void> => {
    const existUser = await this.findUserAdmByEmailRepository.run(input)
    if (existUser) {
      throw new DuplicateRecordError('email')
    }
  }
}
