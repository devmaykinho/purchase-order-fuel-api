export class DuplicateRecordError extends Error {
  private readonly code: number

  constructor (paramName: string) {
    super(`There is already a record with the field: ${paramName}`)
    this.name = 'DuplicateRecordError'
    this.code = 400
  }
}
