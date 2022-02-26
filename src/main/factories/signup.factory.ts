import { SignupUseCase } from '../../domain/usecase/signup.usecase'
import { DuplicateFuelStationValidation } from '../../domain/validations/duplicate-fuel-station.validation'
import { CreateFuelStationRepositoryPg } from '../../infra/repositories/postgres/repository/create-fuel-station.repository'
import { FindFuelStationByEmailOrCnpjRepositoryPg } from '../../infra/repositories/postgres/repository/find-fuel-station-by-email-or-cnpj.repository'
import { BcryptAdapter } from '../../infra/adapters'
import { SignupController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'
import { makeSignupValidationFactory } from './validations/signup-validation.factory'

export const makeSignupController = (): Controller => {
  const findFuelStationByEmailOrCnpjRepository = new FindFuelStationByEmailOrCnpjRepositoryPg()
  const duplicateFuelStationValidation = new DuplicateFuelStationValidation(findFuelStationByEmailOrCnpjRepository)
  const createFuelStationRepository = new CreateFuelStationRepositoryPg()
  const generationPasswordHash = new BcryptAdapter(12)
  const signupUseCase = new SignupUseCase(
    makeSignupValidationFactory(),
    duplicateFuelStationValidation,
    createFuelStationRepository,
    generationPasswordHash
  )
  return new SignupController(signupUseCase)
}
