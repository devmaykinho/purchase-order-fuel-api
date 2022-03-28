import { CreateUserAdmUseCase } from '../../domain/usecase/create-user-adm.usecase'
import { DuplicateUserAdmValidation } from '../../domain/validations/duplicate-user-adm.validation'
import { FindUserAdmByEmailRepositoryPg, CreateUserAdmRepositoryPg } from '../../infra/repositories/postgres/repository'
import { BcryptAdapter } from '../../infra/adapters'
import { CreateUserAdmController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'
import { makeCreateUserAdmValidationFactory } from './validations/create-user-adm.factory'

export const makeCreateUserAdmController = (): Controller => {
  const findUserAdmByEmailRepositoryPg = new FindUserAdmByEmailRepositoryPg()
  const duplicateFuelStationValidation = new DuplicateUserAdmValidation(findUserAdmByEmailRepositoryPg)
  const createUserAdmRepositoryPg = new CreateUserAdmRepositoryPg()
  const generationPasswordHash = new BcryptAdapter(12)
  const signupUseCase = new CreateUserAdmUseCase(
    makeCreateUserAdmValidationFactory(),
    duplicateFuelStationValidation,
    createUserAdmRepositoryPg,
    generationPasswordHash
  )
  return new CreateUserAdmController(signupUseCase)
}
