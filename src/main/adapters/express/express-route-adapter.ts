import { Controller, HttpRequestModel } from '../../../presentation/interfaces/controller'
import { Request, Response } from 'express'

export const adaptRouter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequestModel = {
      params: req.params,
      body: req.body,
      locals: req.locals
    }
    const httpReponse = await controller.handle(httpRequest)
    res.status(httpReponse.statusCode).json(httpReponse.body)
  }
}
