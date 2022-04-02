import { UserAdmModel } from '../../models'

export interface UpdateUserAdmRepository {
  run: (user: UserAdmModel) => Promise<void>
}
