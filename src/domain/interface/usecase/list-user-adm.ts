import { UserAdmResponse } from '../../response'

export interface ListUserAdm {
  run: () => Promise<UserAdmResponse[] | undefined>
}
