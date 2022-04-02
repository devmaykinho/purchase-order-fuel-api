import { UserAdmModel } from '../../models'

export interface UpdateUserAdm {
  run: (user: UserAdmModel) => Promise<void>
}
