export class MissingParamError extends Error {
  private readonly code: number
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
    this.code = 400
  }
}
