import request from 'supertest'
import app from '../config/app'
import { getConnection } from 'typeorm'
import { IBackup } from 'pg-mem'
import { FuelStationEntity } from '../../infra/repositories/postgres/entities'
import { newFuelStation } from '../../utils/fixtures'
import { makeFakeDb } from '../../infra/repositories/postgres/mocks/connection'

const fuelStation = newFuelStation()

describe('Signup Route - Integrarion test', () => {
  let backup: IBackup

  beforeAll(async () => {
    const database = await makeFakeDb([FuelStationEntity])
    backup = database.backup()
  })

  beforeEach(() => {
    backup.restore()
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should return 201 if the api is working', async () => {
    await request(app)
      .post('/api/signup')
      .send(fuelStation)
      .expect(201)
  })

  it('Should return 400 if body is not provided', async () => {
    await request(app)
      .post('/api/signup')
      .send()
      .expect(400)
  })
})
