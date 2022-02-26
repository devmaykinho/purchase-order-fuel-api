import { IBackup } from 'pg-mem'
import { getConnection, getRepository, Repository } from 'typeorm'
import { FindFuelStationByEmailRepositoryPg } from './find-fuel-station-by-email'
import { FindFuelStationByEmailRepository } from '../../../../domain/interface'
import { FuelStationEntity } from '../entities'
import { makeFakeDb } from '../mocks/connection'
import { newFuelStation } from '../../../../utils/fixtures'

const fuelStation = newFuelStation({ email: 'teste@email' })

describe('FindFuelStationByEmail - Unit test', () => {
  let backup: IBackup
  let fuelStationEntity: Repository<FuelStationEntity>
  let findFuelStationByEmailRepository: FindFuelStationByEmailRepository

  beforeAll(async () => {
    const database = await makeFakeDb([FuelStationEntity])
    backup = database.backup()
    fuelStationEntity = getRepository(FuelStationEntity)
    findFuelStationByEmailRepository = new FindFuelStationByEmailRepositoryPg()
  })

  beforeEach(() => {
    backup.restore()
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should return a fuel station if email exists', async () => {
    await fuelStationEntity.save(fuelStation)
    const fuelStationResponse = await findFuelStationByEmailRepository.run('teste@email')
    expect(fuelStationResponse).toBeTruthy()
  })

  it('Should return undefined if email does not exists', async () => {
    const fuelStationResponse = await findFuelStationByEmailRepository.run('teste@email')
    expect(fuelStationResponse).toBeFalsy()
  })
})
