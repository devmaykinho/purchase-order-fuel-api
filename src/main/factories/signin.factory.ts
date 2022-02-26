import { SigninUseCase } from '../../domain/usecase/signin.usecase'
import { FindFuelStationByEmailRepositoryPg } from '../../infra/repositories/postgres/repository/find-fuel-station-by-email'
import { BcryptAdapter, JwtAdapter } from '../../infra/adapters'
import { SigninController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'
import { makeSigninValidationFactory } from './validations/signin-validation.factory'

export const makeSigninController = (): Controller => {
  const findFuelStationByEmailRepository = new FindFuelStationByEmailRepositoryPg()
  const comparePassword = new BcryptAdapter(12)
  const generationToken = new JwtAdapter('webgaz')
  const signinUseCase = new SigninUseCase(
    makeSigninValidationFactory(),
    findFuelStationByEmailRepository,
    comparePassword,
    generationToken
  )
  return new SigninController(signinUseCase)
}
