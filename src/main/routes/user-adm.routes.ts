import { Router } from 'express'
import { makeSigninAdmController, makeCreateUserAdmController, makeListUserAdmController, makeUpdateUserAdmController } from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/user-adm/signin', adaptRouter(makeSigninAdmController()))
  router.post('/user-adm', adaptRouter(makeCreateUserAdmController()))
  router.get('/user-adm', adaptRouter(makeListUserAdmController()))
  router.put('/user-adm', adaptRouter(makeUpdateUserAdmController()))
}
