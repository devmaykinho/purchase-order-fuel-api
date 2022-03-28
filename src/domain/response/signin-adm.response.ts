import { UserAdmResponse } from './user-adm.response'

export interface SigninAdmResponse {
  token: string
  userAdm: UserAdmResponse
}
