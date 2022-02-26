import { IBackup } from 'pg-mem'
import { makeFakeDb } from '../mocks/connection'
import { getRepository, getConnection, Repository } from 'typeorm'
import { newSupplierPrices } from '../../../../utils/fixtures'
import { CreateSupplierPricesRepositoryPg } from './create-supplier-prices.repository'
import { SupplierPricesEntity } from '../entities'
import { CreateSupplierPricesRepository } from '../../../../domain/interface'

const supplierPirces = newSupplierPrices()
describe('CreateSupplierPrices Repository - Unit test', () => {
  let backup: IBackup
  let supplierEntity: Repository<SupplierPricesEntity>
  let createFuelStationRepository: CreateSupplierPricesRepository

  beforeAll(async () => {
    const database = await makeFakeDb([SupplierPricesEntity])
    backup = database.backup()
    supplierEntity = getRepository(SupplierPricesEntity)
  })

  beforeEach(() => {
    backup.restore()
    createFuelStationRepository = new CreateSupplierPricesRepositoryPg()
  })

  afterAll(async () => {
    await getConnection().close()
  })
  it('Should create a supplier price', async () => {
    await createFuelStationRepository.run(supplierPirces)
    const supplierPircesCreated = await supplierEntity.findOne({
      fuelType: 'GASOLINA',
      deliveryType: 'RETIRADA',
      paymentType: 'ANTECIPADO',
      supplierId: 1
    })
    expect(supplierPircesCreated).toEqual(supplierPirces)
  })
})
