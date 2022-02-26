import { IBackup } from 'pg-mem'
import { makeFakeDb } from '../mocks/connection'
import { getRepository, getConnection, Repository } from 'typeorm'
import { newFuelStation } from '../../../../utils/fixtures'
import { CreateFuelStationRepositoryPg } from './create-fuel-station.repository'
import { FuelStationEntity } from '../entities'
import { CreateFuelStationRepository } from '../../../../domain/interface'

const fuelStation = newFuelStation({ cnpj: '0001' })
describe('CreateFuelStation Repository - Unit test', () => {
  let backup: IBackup
  let fuelStationEntity: Repository<FuelStationEntity>
  let createFuelStationRepository: CreateFuelStationRepository

  beforeAll(async () => {
    const database = await makeFakeDb([FuelStationEntity])
    backup = database.backup()
    fuelStationEntity = getRepository(FuelStationEntity)
  })

  beforeEach(() => {
    backup.restore()
    createFuelStationRepository = new CreateFuelStationRepositoryPg()
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should create a fuel station', async () => {
    await createFuelStationRepository.run(fuelStation)
    const fuelStationCreated = await fuelStationEntity.findOne({ cnpj: '0001' })
    const { passwordConfirmation, ...fuelStationCompare } = fuelStation
    expect(fuelStationCreated).toEqual(fuelStationCompare)
  })
})
