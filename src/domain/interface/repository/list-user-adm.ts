import { UserAdmResponse } from '../../response'

export interface ListUserAdmRepository {
  run: () => Promise<UserAdmResponse[] | undefined>
}
