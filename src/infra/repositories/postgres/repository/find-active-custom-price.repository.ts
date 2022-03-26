import moment from 'moment'
import { getRepository } from 'typeorm'
import { FindActiveCustomPriceRepository } from '../../../../domain/interface'
import { CustomPriceResponse } from '../../../../domain/response'
import { CustomPriceEntity } from '../entities'

export class FindActiveCustomPriceRepositoryPg implements FindActiveCustomPriceRepository {
  run = async (fuelStationId: number): Promise<CustomPriceResponse[] | undefined> => {
    try {
      const currentDate = new Date()
      const dateFormated = moment(currentDate).format('YYYY-MM-DD')
      const customPriceEntity = getRepository(CustomPriceEntity)
      return await customPriceEntity.find({
        fuelStationId: fuelStationId,
        isActive: 'SIM',
        createDate: dateFormated
      })
    } catch (error) {
      console.error('FindActiveCustomPriceRepositoryPg:::', error)
      throw new Error('Erro ao pesquisar um preço ativo')
    }
  }
}
