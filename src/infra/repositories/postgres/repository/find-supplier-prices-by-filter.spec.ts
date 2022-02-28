import { IBackup } from 'pg-mem'
import { getConnection, getRepository, Repository } from 'typeorm'
import { FindSupplierPricesByFilterRepositoryPg } from './find-supplier-prices-by-filter.repository'
import { FindSupplierPricesByFilterRepository, FindSupplierPricesFilter } from '../../../../domain/interface'
import { SupplierPricesEntity, SupplierEntity } from '../entities'
import { makeFakeDb } from '../mocks/connection'
import { newSupplierPrices, newSupplier } from '../../../../utils/fixtures'

const supplierPrices = newSupplierPrices()
const supplier = newSupplier()

const filter: FindSupplierPricesFilter = {
  fuelType: 'GASOLINA',
  deliveryType: 'RETIRADA',
  paymentType: 'ANTECIPADO'
}

describe('FindSupplierPricesByFilter - Unit test', () => {
  let backup: IBackup
  let supplierPricesEntity: Repository<SupplierPricesEntity>
  let supplierEntity: Repository<SupplierEntity>
  let findFuelStationByEmailRepository: FindSupplierPricesByFilterRepository

  beforeAll(async () => {
    const database = await makeFakeDb([SupplierPricesEntity, SupplierEntity])
    backup = database.backup()
    supplierPricesEntity = getRepository(SupplierPricesEntity)
    supplierEntity = getRepository(SupplierEntity)
    findFuelStationByEmailRepository = new FindSupplierPricesByFilterRepositoryPg()
  })

  beforeEach(() => {
    backup.restore()
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should return a supplier price', async () => {
    await supplierEntity.save(supplier)
    await supplierPricesEntity.save(supplierPrices)
    const fuelStationResponse = await findFuelStationByEmailRepository.run(filter)
    expect(fuelStationResponse).toBeTruthy()
  })

  it('Should return undefined if does not exists a supplier prices', async () => {
    const fuelStationResponse = await findFuelStationByEmailRepository.run(filter)
    expect(fuelStationResponse).toBeFalsy()
  })
})
