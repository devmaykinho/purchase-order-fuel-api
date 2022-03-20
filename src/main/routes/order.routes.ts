import { Router } from 'express'
import {
  makeCreatePurchaseOrderController,
  makeFindPurchaseOrderByFilterController,
  makeListPurchaseOrdersController
} from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/purchase-order', adaptRouter(makeCreatePurchaseOrderController()))
  router.get('/purchase-order/filter/:fuelStationId', adaptRouter(makeFindPurchaseOrderByFilterController()))
  router.get('/purchase-order', adaptRouter(makeListPurchaseOrdersController()))
}
