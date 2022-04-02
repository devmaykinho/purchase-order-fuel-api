import { Router } from 'express'
import { makeUpdateConfigController, makeListConfigController } from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.get('/config', adaptRouter(makeListConfigController()))
  router.put('/config', adaptRouter(makeUpdateConfigController()))
}
