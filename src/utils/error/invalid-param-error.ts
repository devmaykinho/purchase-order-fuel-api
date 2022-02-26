export class InvalidParamError extends Error {
  private readonly code: number

  constructor (paramName: string) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
    this.code = 400
  }
}
