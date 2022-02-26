import { Signin } from '../../domain/interface/usecase/signin'
import { customError, ok } from '../helpers/http-response'
import { Controller, HttpRequestModel, HttpResponseModel } from '../interfaces/controller'

export class SigninController implements Controller {
  constructor (private readonly signinUsecase: Signin) {}

  handle = async (req: HttpRequestModel): Promise<HttpResponseModel> => {
    try {
      const result = await this.signinUsecase.run(req.body)
      return ok(result)
    } catch (error) {
      return customError(error)
    }
  }
}
