import { Router, Request, Response } from 'express'
import axios from 'axios'

export default (router: Router): void => {
  router.get('/health', (req: Request, res: Response) => {
    axios.get('https://player.vimeo.com').then(() => {
      res.status(200).json({ description: 'servidor is running' })
    }).catch((error) => {
      res.status(200).json({ description: error })
    })
  })
}
