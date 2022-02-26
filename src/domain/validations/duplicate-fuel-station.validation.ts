import { DuplicateRecordError } from '../../utils/error'
import { FindFuelStationByEmailOrCnpjRepository, ValidationDuplicateRecord } from '../interface'

export class DuplicateFuelStationValidation implements ValidationDuplicateRecord {
  constructor (private readonly findFuelStationByEmailOrCnpjRepository: FindFuelStationByEmailOrCnpjRepository) {}
  validate = async (input: any): Promise<void> => {
    const existFuelStation = await this.findFuelStationByEmailOrCnpjRepository.run(input)
    if (existFuelStation) {
      throw new DuplicateRecordError('cnpj')
    }
  }
}
