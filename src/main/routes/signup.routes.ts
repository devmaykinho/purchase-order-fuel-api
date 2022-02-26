import { Router } from 'express'
import { makeSignupController } from '../factories/signup.factory'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/signup', adaptRouter(makeSignupController()))
}
