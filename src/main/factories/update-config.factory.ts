import { UpdateConfigUseCase } from '../../domain/usecase/update-config.usecase'
import { UpdateConfigRepositoryPg } from '../../infra/repositories/postgres/repository'
import { UpdateConfigController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'
import { makeUpdateConfigValidationFactory } from './validations/update-config.factory'

export const makeUpdateConfigController = (): Controller => {
  const updateConfigRepository = new UpdateConfigRepositoryPg()
  const updateConfigUseCase = new UpdateConfigUseCase(
    makeUpdateConfigValidationFactory(),
    updateConfigRepository
  )
  return new UpdateConfigController(updateConfigUseCase)
}
