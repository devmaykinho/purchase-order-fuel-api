import { DuplicateRecordError } from '../../utils/error'
import { FindSupplierPricesByFilterRepository, ValidationDuplicateRecord } from '../interface'

export class DuplicateSupplierPriceValidation implements ValidationDuplicateRecord {
  constructor (private readonly findSupplierPricesByFilterRepository: FindSupplierPricesByFilterRepository) {}
  validate = async (input: any): Promise<void> => {
    const exisSupplierPrice = await this.findSupplierPricesByFilterRepository.run(input)
    if (exisSupplierPrice && exisSupplierPrice.id !== input.id) {
      throw new DuplicateRecordError('supplierId')
    }
  }
}
