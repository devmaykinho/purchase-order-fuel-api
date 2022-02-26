import { Router } from 'express'
import { makeSigninController } from '../factories/signin.factory'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/signin', adaptRouter(makeSigninController()))
}
