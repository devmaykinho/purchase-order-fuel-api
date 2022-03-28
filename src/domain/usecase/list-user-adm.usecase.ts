import { ListUserAdmRepository, ListUserAdm } from '../interface'
import { UserAdmResponse } from '../response'

export class ListUserAdmUseCase implements ListUserAdm {
  constructor (
    private readonly listUserAdmRepository: ListUserAdmRepository
  ) {}

  run = async (): Promise<UserAdmResponse[] | undefined> => {
    return await this.listUserAdmRepository.run()
  }
}
