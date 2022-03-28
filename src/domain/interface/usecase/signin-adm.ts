import { SigninModel } from '../../models/signin'
import { SigninAdmResponse } from '../../response/signin-adm.response'

export interface SigninAdm {
  run: (credentions: SigninModel) => Promise<SigninAdmResponse>
}
