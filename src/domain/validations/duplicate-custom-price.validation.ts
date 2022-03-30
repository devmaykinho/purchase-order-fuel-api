import { DuplicateRecordError } from '../../utils/error'
import { FindActiveCustomPriceByfilterRepository, ValidationDuplicateRecord } from '../interface'

export class DuplicateCustomPriceValidation implements ValidationDuplicateRecord {
  constructor (private readonly findActiveCustomPriceRepository: FindActiveCustomPriceByfilterRepository) {}
  validate = async (input: any): Promise<void> => {
    const existCustomPrice = await this.findActiveCustomPriceRepository.run(input)
    if (existCustomPrice && existCustomPrice.id !== input.id) {
      throw new DuplicateRecordError('fuelStationId')
    }
  }
}
