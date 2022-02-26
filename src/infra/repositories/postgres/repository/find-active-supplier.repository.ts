import { SupplierEntity } from '../entities'
import { getRepository } from 'typeorm'
import { FindActiveSupplierRepository } from '../../../../domain/interface'
import { SupplierResponse } from '../../../../domain/response'

export class FindActiveSupplierRepositoryPg implements FindActiveSupplierRepository {
  run = async (): Promise<SupplierResponse | undefined> => {
    const supplierEntity = getRepository(SupplierEntity)
    return await supplierEntity.findOne({ isActive: 'SIM' })
  }
}
