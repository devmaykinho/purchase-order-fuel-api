import { UnauthorizedError } from '../../utils/error'
import { ComparePassword, Encrypter, FindFuelStationByEmailRepository, Validation } from '../interface'
import { Signin } from '../interface/usecase/signin'
import { SigninModel } from '../models/signin'
import { SigninResponse } from '../response/signin.response'

export class SigninUseCase implements Signin {
  constructor (
    private readonly requiredFieldsValidation: Validation,
    private readonly findFuelStationByEmailRepository: FindFuelStationByEmailRepository,
    private readonly comparePassword: ComparePassword,
    private readonly generationToken: Encrypter
  ) {}

  run = async (credentions: SigninModel): Promise<SigninResponse> => {
    this.requiredFieldsValidation.validate(credentions)

    const { email, password } = credentions
    const fuelStation = await this.findFuelStationByEmailRepository.run(email)

    if (!fuelStation) {
      throw new UnauthorizedError()
    }

    const isAuthenticated = this.comparePassword.compare(password, fuelStation.password)

    if (!isAuthenticated) {
      throw new UnauthorizedError()
    }

    const token = await this.generationToken.encrypt(fuelStation.cnpj)

    const signinReponse: SigninResponse = {
      token: token,
      fuelStation: fuelStation
    }

    return signinReponse
  }
}
