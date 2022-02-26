import { Router } from 'express'
import { makeCreatePurchaseOrderController, makeFindOrderPriceByFilterController } from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/purchase-order', adaptRouter(makeCreatePurchaseOrderController()))
  router.post('/purchase-order/filter', adaptRouter(makeFindOrderPriceByFilterController()))
}
