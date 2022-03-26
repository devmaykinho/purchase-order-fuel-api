import moment from 'moment'
import { getRepository } from 'typeorm'
import { FindActiveCustomPriceByfilterRepository, filter } from '../../../../domain/interface/repository'
import { CustomPriceResponse } from '../../../../domain/response'
import { CustomPriceEntity } from '../entities'

export class FindActiveCustomPriceByFilterRepositoryPg implements FindActiveCustomPriceByfilterRepository {
  run = async (filter: filter): Promise<CustomPriceResponse | undefined> => {
    try {
      const currentDate = new Date()
      const dateFormated = moment(currentDate).format('YYYY-MM-DD')
      const customPriceEntity = getRepository(CustomPriceEntity)
      return await customPriceEntity.findOne({
        where: {
          fuelStationId: filter.fuelStationId,
          fuelType: filter.fuelType,
          isActive: 'SIM',
          createDate: dateFormated
        }
      })
    } catch (error) {
      console.error('FindActiveCustomPriceByFilterRepositoryPg:::', error)
      throw new Error('Erro ao pesquisar um preço ativo')
    }
  }
}
