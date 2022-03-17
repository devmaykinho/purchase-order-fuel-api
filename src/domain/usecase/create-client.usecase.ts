import { CreateClient, Validation } from '../interface'
import { ClientModel } from '../models/client'
import { CreateClientRepository } from '../interface/repository'

export class CreateSupplierUseCase implements CreateClient {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly createSupplierRepository: CreateClientRepository
  ) {}

  run = async (client: ClientModel): Promise<void> => {
    this.requiredFieldsValidation.validate(client)

    await this.createSupplierRepository.run(client)
  }
}
