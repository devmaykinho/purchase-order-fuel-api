export class CustomError extends Error {
  private readonly code: number

  constructor (message: string) {
    super(message)
    this.name = 'CustomError'
    this.code = 400
  }
}
