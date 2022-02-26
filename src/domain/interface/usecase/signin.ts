import { SigninModel } from '../../models/signin'
import { SigninResponse } from '../../response/signin.response'

export interface Signin {
  run: (credentions: SigninModel) => Promise<SigninResponse>
}
