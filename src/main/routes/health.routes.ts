import { Router, Request, Response } from 'express'

export default (router: Router): void => {
  router.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ description: 'servidor is running' })
  })
}
