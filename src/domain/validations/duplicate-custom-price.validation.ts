import { DuplicateRecordError } from '../../utils/error'
import { FindActiveCustomPriceRepository, ValidationDuplicateRecord } from '../interface'

export class DuplicateCustomPriceValidation implements ValidationDuplicateRecord {
  constructor (private readonly findActiveCustomPriceRepository: FindActiveCustomPriceRepository) {}
  validate = async (input: any): Promise<void> => {
    const existCustomPrice = await this.findActiveCustomPriceRepository.run(input)
    if (existCustomPrice) {
      throw new DuplicateRecordError('fuelStationId')
    }
  }
}
