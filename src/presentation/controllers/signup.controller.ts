import { Signup } from '../../domain/interface/usecase/signup'
import { created, customError } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class SignupController implements Controller {
  constructor (private readonly signupUsecase: Signup) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      await this.signupUsecase.run(req.body)
      return created()
    } catch (error) {
      return customError(error)
    }
  }
}
