import { UpdateFuelStationUseCase } from '../../domain/usecase/update-fuelstation.usecase'
import { DuplicateFuelStationValidation } from '../../domain/validations/duplicate-fuel-station.validation'
import { UpdateFuelStationRepositoryPg } from '../../infra/repositories/postgres/repository/update-fuelstation.repository'
import { FindFuelStationByEmailOrCnpjRepositoryPg } from '../../infra/repositories/postgres/repository/find-fuel-station-by-email-or-cnpj.repository'
import { UpdateFuelStationController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'
import { makeSignupValidationFactory } from './validations/signup-validation.factory'

export const makeUpdateFuelStationController = (): Controller => {
  const findFuelStationByEmailOrCnpjRepository = new FindFuelStationByEmailOrCnpjRepositoryPg()
  const duplicateFuelStationValidation = new DuplicateFuelStationValidation(findFuelStationByEmailOrCnpjRepository)
  const updateFuelStationRepository = new UpdateFuelStationRepositoryPg()
  const updateFuelStationUseCase = new UpdateFuelStationUseCase(
    makeSignupValidationFactory(),
    duplicateFuelStationValidation,
    updateFuelStationRepository
  )
  return new UpdateFuelStationController(updateFuelStationUseCase)
}
