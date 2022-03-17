import { Router } from 'express'
import { makeClientController, makeListClientController } from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/client', adaptRouter(makeClientController()))
  router.get('/client', adaptRouter(makeListClientController()))
}
