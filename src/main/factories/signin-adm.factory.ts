import { SigninUserAdmUseCase } from '../../domain/usecase/signin-adm.usecase'
import { FindUserAdmByEmailRepositoryPg } from '../../infra/repositories/postgres/repository/find-user-adm-by-email'
import { BcryptAdapter, JwtAdapter } from '../../infra/adapters'
import { SigninAdmController } from '../../presentation/controllers'
import { Controller } from '../../presentation/interfaces/controller'
import { makeSigninValidationFactory } from './validations/signin-validation.factory'

export const makeSigninAdmController = (): Controller => {
  const findUserAdmByEmailRepository = new FindUserAdmByEmailRepositoryPg()
  const comparePassword = new BcryptAdapter(12)
  const generationToken = new JwtAdapter('webgaz')
  const signinUseCase = new SigninUserAdmUseCase(
    makeSigninValidationFactory(),
    findUserAdmByEmailRepository,
    comparePassword,
    generationToken
  )
  return new SigninAdmController(signinUseCase)
}
