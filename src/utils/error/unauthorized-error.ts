export class UnauthorizedError extends Error {
  private readonly code: number
  constructor () {
    super('Unauthorized. User or password is invalid')
    this.name = 'Unauthorized'
    this.code = 401
  }
}
