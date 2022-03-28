import { Router } from 'express'
import { makeSigninAdmController, makeCreateUserAdmController, makeListUserAdmController } from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/user-adm/signin', adaptRouter(makeSigninAdmController()))
  router.post('/user-adm', adaptRouter(makeCreateUserAdmController()))
  router.get('/user-adm', adaptRouter(makeListUserAdmController()))
}
