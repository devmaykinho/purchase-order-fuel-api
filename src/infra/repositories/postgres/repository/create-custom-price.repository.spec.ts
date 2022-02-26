import { IBackup } from 'pg-mem'
import { makeFakeDb } from '../mocks/connection'
import { getRepository, getConnection, Repository } from 'typeorm'
import { newCustomPrice } from '../../../../utils/fixtures'
import { CreateCustomPriceRepositoryPg } from './create-custom-price.repository'
import { CustomPriceEntity } from '../entities'
import { CreateCustomPriceRepository } from '../../../../domain/interface'

const customPrice = newCustomPrice()
describe('CreateCustomPrice Repository - Unit test', () => {
  let backup: IBackup
  let customPriceEntity: Repository<CustomPriceEntity>
  let createCustomPriceRepository: CreateCustomPriceRepository

  beforeAll(async () => {
    const database = await makeFakeDb([CustomPriceEntity])
    backup = database.backup()
    customPriceEntity = getRepository(CustomPriceEntity)
  })

  beforeEach(() => {
    backup.restore()
    createCustomPriceRepository = new CreateCustomPriceRepositoryPg()
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should create a supplier price', async () => {
    await createCustomPriceRepository.run(customPrice)
    const customPriceCreated = await customPriceEntity.findOne({ fuelStationId: customPrice.fuelStationId })
    expect(customPriceCreated).toBeTruthy()
  })
})
