import { IBackup } from 'pg-mem'
import { getConnection, getRepository, Repository } from 'typeorm'
import { FindActiveCustomPriceRepositoryPg } from './find-active-custom-price.repository'
import { FindActiveCustomPriceRepository } from '../../../../domain/interface'
import { CustomPriceEntity } from '../entities'
import { makeFakeDb } from '../mocks/connection'
import { newCustomPrice } from '../../../../utils/fixtures'

const customPrice = newCustomPrice()

describe('FindActiveCustomPrice - Unit test', () => {
  let backup: IBackup
  let customPriceEntity: Repository<CustomPriceEntity>
  let findActiveCustomPriceRepository: FindActiveCustomPriceRepository

  beforeAll(async () => {
    const database = await makeFakeDb([CustomPriceEntity])
    backup = database.backup()
    customPriceEntity = getRepository(CustomPriceEntity)
    findActiveCustomPriceRepository = new FindActiveCustomPriceRepositoryPg()
  })

  beforeEach(() => {
    backup.restore()
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should return a custom price', async () => {
    await customPriceEntity.save(customPrice)
    const fuelStationResponse = await findActiveCustomPriceRepository.run(customPrice.fuelStationId)
    expect(fuelStationResponse).toBeTruthy()
  })

  it('Should return undefined if does not exists custom price for fuelStationId', async () => {
    const fuelStationResponse = await findActiveCustomPriceRepository.run(customPrice.fuelStationId)
    expect(fuelStationResponse).toBeFalsy()
  })
})
