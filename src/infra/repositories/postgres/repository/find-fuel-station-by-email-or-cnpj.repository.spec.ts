import { IBackup } from 'pg-mem'
import { getRepository, getConnection, Repository } from 'typeorm'
import { FuelStationEntity } from '../entities'
import { FindFuelStationByEmailOrCnpjRepository, FuelStationFilter } from '../../../../domain/interface'
import { FindFuelStationByEmailOrCnpjRepositoryPg } from './find-fuel-station-by-email-or-cnpj.repository'
import { makeFakeDb } from '../mocks/connection'
import { newFuelStation } from '../../../../utils/fixtures'

const fuelStation = newFuelStation({ cnpj: '0001', email: 'teste@mail.com' })
describe('FindFuelStationByEmailOrCnpj - Unit test', () => {
  let backup: IBackup
  let fuelStationEntity: Repository<FuelStationEntity>
  let findFuelStationByEmailOrCnpjRepository: FindFuelStationByEmailOrCnpjRepository

  beforeAll(async () => {
    const database = await makeFakeDb([FuelStationEntity])
    backup = database.backup()
    fuelStationEntity = getRepository(FuelStationEntity)
    findFuelStationByEmailOrCnpjRepository = new FindFuelStationByEmailOrCnpjRepositoryPg()
  })

  beforeEach(() => {
    backup.restore()
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should return a fuel station when cnpj is valid and email is invalid', async () => {
    const filter: FuelStationFilter = {
      cnpj: '0001',
      email: 'invalid@mail.com'
    }
    await fuelStationEntity.save(fuelStation)
    const result = await findFuelStationByEmailOrCnpjRepository.run(filter)
    expect(result).toBeTruthy()
  })

  it('Should return a fuel station when email is valid and cnpj is invalid', async () => {
    const filter: FuelStationFilter = {
      cnpj: 'invalid_cnpj',
      email: 'teste@mail.com'
    }
    await fuelStationEntity.save(fuelStation)
    const result = await findFuelStationByEmailOrCnpjRepository.run(filter)
    expect(result).toBeTruthy()
  })

  it('Should return a fuel station when email and cnpj is valid', async () => {
    const filter: FuelStationFilter = {
      cnpj: '0001',
      email: 'teste@mail.com'
    }
    await fuelStationEntity.save(fuelStation)
    const result = await findFuelStationByEmailOrCnpjRepository.run(filter)
    expect(result).toBeTruthy()
  })

  it('Should return a undefined when email and cnpj is invalid', async () => {
    const filter: FuelStationFilter = {
      cnpj: 'invalid_cnpj',
      email: 'invalid@mail.com'
    }
    await fuelStationEntity.save(fuelStation)
    const result = await findFuelStationByEmailOrCnpjRepository.run(filter)
    expect(result).toBeFalsy()
  })
})
