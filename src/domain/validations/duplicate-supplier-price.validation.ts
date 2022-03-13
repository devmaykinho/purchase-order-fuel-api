import { DuplicateRecordError } from '../../utils/error'
import { FindSupplierPricesBySupplierIdRepository, ValidationDuplicateRecord } from '../interface'

export class DuplicateSupplierPriceValidation implements ValidationDuplicateRecord {
  constructor (private readonly findSupplierPricesBySupplierIdRepository: FindSupplierPricesBySupplierIdRepository) {}
  validate = async (input: any): Promise<void> => {
    const exisSupplierPrice = await this.findSupplierPricesBySupplierIdRepository.run(input)
    if (exisSupplierPrice) {
      throw new DuplicateRecordError('supplierId')
    }
  }
}
