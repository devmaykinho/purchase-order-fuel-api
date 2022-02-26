import { HttpResponseModel } from '../interfaces/controller'

export const badRequest = (error: any): HttpResponseModel => ({
  statusCode: error.code,
  body: error.message
})

export const serverError = (): HttpResponseModel => ({
  statusCode: 500,
  body: 'Internal error'
})

export const ok = (data?): HttpResponseModel => ({
  statusCode: 200,
  body: data
})

export const created = (data?): HttpResponseModel => ({
  statusCode: 201,
  body: data
})

export const customError = (error: any): HttpResponseModel => {
  if (error.code) {
    return badRequest(error)
  }

  return serverError()
}
