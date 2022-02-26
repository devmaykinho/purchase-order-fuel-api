import request from 'supertest'
import app from '../config/app'
import { getConnection, getRepository, Repository } from 'typeorm'
import { IBackup } from 'pg-mem'
import { FuelStationEntity } from '../../infra/repositories/postgres/entities'
import { newFuelStation } from '../../utils/fixtures'
import { makeFakeDb } from '../../infra/repositories/postgres/mocks/connection'

const fuelStation = newFuelStation({ email: 'teste@email', password: '123' })
const credentions = {
  email: 'teste@email',
  password: '123'
}

describe('Signin Route - Integrarion test', () => {
  let backup: IBackup
  let fuelStationEntity: Repository<FuelStationEntity>

  beforeAll(async () => {
    const database = await makeFakeDb([FuelStationEntity])
    backup = database.backup()
    fuelStationEntity = getRepository(FuelStationEntity)
  })

  beforeEach(async () => {
    backup.restore()
    await fuelStationEntity.save(fuelStation)
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should return 200 if the api is working', async () => {
    await request(app)
      .post('/api/signin')
      .send(credentions)
      .expect(200)
  })

  it('Should return 400 if body is not provided', async () => {
    await request(app)
      .post('/api/signin')
      .send()
      .expect(400)
  })
})
