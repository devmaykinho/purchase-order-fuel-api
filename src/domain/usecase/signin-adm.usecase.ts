import { UnauthorizedError } from '../../utils/error'
import { ComparePassword, Encrypter, FindUserAdmByEmailRepository, Validation } from '../interface'
import { SigninAdm } from '../interface/usecase/signin-adm'
import { SigninModel } from '../models/signin'
import { SigninAdmResponse } from '../response/signin-adm.response'

export class SigninUserAdmUseCase implements SigninAdm {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly findUserAdmByEmailRepository: FindUserAdmByEmailRepository,
    private readonly comparePassword: ComparePassword,
    private readonly generationToken: Encrypter
  ) {}

  run = async (credentions: SigninModel): Promise<SigninAdmResponse> => {
    this.requiredFieldsValidation.validate(credentions)

    const { email, password } = credentions
    const userAdm = await this.findUserAdmByEmailRepository.run(email)

    if (!userAdm) {
      throw new UnauthorizedError()
    }

    const isAuthenticated = this.comparePassword.compare(password, userAdm.password)

    if (!isAuthenticated) {
      throw new UnauthorizedError()
    }

    const token = await this.generationToken.encrypt(userAdm.email)

    const signinReponse: SigninAdmResponse = {
      token: token,
      userAdm: userAdm
    }

    return signinReponse
  }
}
