import { UserAdmModel } from '../../models'

export interface CreateUserAdmRepository {
  run: (user: UserAdmModel) => Promise<void>
}
