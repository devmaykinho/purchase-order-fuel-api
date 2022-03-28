import { UserAdmModel } from '../../models'

export interface CreateUserAdm {
  run: (user: UserAdmModel) => Promise<void>
}
