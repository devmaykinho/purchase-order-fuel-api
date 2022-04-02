import { UpdateUserAdmUseCase } from '../../domain/usecase/update-user-adm.usecase'
import { DuplicateUserAdmValidation } from '../../domain/validations/duplicate-user-adm.validation'
import { FindUserAdmByEmailRepositoryPg, UpdateUserAdmRepositoryPg } from '../../infra/repositories/postgres/repository'
import { UpdateUserAdmController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'
import { makeUpdateUserAdmValidationFactory } from './validations/update-user-adm.factory'

export const makeUpdateUserAdmController = (): Controller => {
  const findUserAdmByEmailRepositoryPg = new FindUserAdmByEmailRepositoryPg()
  const duplicateFuelStationValidation = new DuplicateUserAdmValidation(findUserAdmByEmailRepositoryPg)
  const updateUserAdmRepository = new UpdateUserAdmRepositoryPg()
  const signupUseCase = new UpdateUserAdmUseCase(
    makeUpdateUserAdmValidationFactory(),
    duplicateFuelStationValidation,
    updateUserAdmRepository
  )
  return new UpdateUserAdmController(signupUseCase)
}
