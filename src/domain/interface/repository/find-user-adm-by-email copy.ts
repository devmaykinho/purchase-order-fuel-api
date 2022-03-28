import { UserAdmResponse } from '../../response'

export interface FindUserAdmByEmailRepository {
  run: (email: string) => Promise<UserAdmResponse | undefined>
}
