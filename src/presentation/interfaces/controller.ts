export interface HttpRequestModel {
  params?: any
  body?: any
  locals?: any
}

export interface HttpResponseModel {
  statusCode: number
  body: any
}

export interface Controller {
  handle: (req: HttpRequestModel) => Promise<HttpResponseModel>
}
