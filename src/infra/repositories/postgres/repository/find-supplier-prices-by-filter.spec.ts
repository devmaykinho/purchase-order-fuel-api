import { IBackup } from 'pg-mem'
import { getConnection, getRepository, Repository } from 'typeorm'
import { FindSupplierPricesByFilterRepositoryPg } from './find-supplier-prices-by-filter.repository'
import { FindSupplierPricesByFilterRepository, FindSupplierPricesFilter } from '../../../../domain/interface'
import { SupplierPricesEntity } from '../entities'
import { makeFakeDb } from '../mocks/connection'
import { newSupplierPrices } from '../../../../utils/fixtures'

const supplierPrices = newSupplierPrices()

const filter: FindSupplierPricesFilter = {
  fuelType: 'GASOLINA',
  deliveryType: 'RETIRADA',
  paymentType: 'ANTECIPADO',
  supplierId: 1
}

describe('FindSupplierPricesByFilter - Unit test', () => {
  let backup: IBackup
  let supplierPricesEntity: Repository<SupplierPricesEntity>
  let findFuelStationByEmailRepository: FindSupplierPricesByFilterRepository

  beforeAll(async () => {
    const database = await makeFakeDb([SupplierPricesEntity])
    backup = database.backup()
    supplierPricesEntity = getRepository(SupplierPricesEntity)
    findFuelStationByEmailRepository = new FindSupplierPricesByFilterRepositoryPg()
  })

  beforeEach(() => {
    backup.restore()
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should return a supplier price', async () => {
    await supplierPricesEntity.save(supplierPrices)
    const fuelStationResponse = await findFuelStationByEmailRepository.run(filter)
    expect(fuelStationResponse).toBeTruthy()
  })

  it('Should return undefined if does not exists a supplier prices', async () => {
    const fuelStationResponse = await findFuelStationByEmailRepository.run(filter)
    expect(fuelStationResponse).toBeFalsy()
  })
})
