import moment from 'moment'
import { getRepository } from 'typeorm'
import { FindActiveCustomPriceRepository } from '../../../../domain/interface'
import { CustomPriceResponse } from '../../../../domain/response'
import { CustomPriceEntity } from '../entities'
import { customPricesMapper } from '../mappers/custom-price.mapper'

export class FindActiveCustomPriceRepositoryPg implements FindActiveCustomPriceRepository {
  run = async (fuelStationId: Number): Promise<CustomPriceResponse | undefined> => {
    const currentDate = new Date()
    const dateFormated = moment(currentDate).format('YYYY-MM-DD')
    const customPriceEntity = getRepository(CustomPriceEntity)
    const customPriceResponse = await customPriceEntity.findOne({
      fuelStationId: fuelStationId,
      isActive: 'SIM',
      createDate: dateFormated
    })
    return customPricesMapper(customPriceResponse)
  }
}
