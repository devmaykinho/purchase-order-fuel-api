import { Router } from 'express'
import {
  makeCreatePurchaseOrderController,
  makeFindPurchaseOrderByFilterController,
  makeListPurchaseOrdersController,
  makeCancelPurchaseOrderController
} from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/purchase-order', adaptRouter(makeCreatePurchaseOrderController()))
  router.get('/purchase-order/filter/:fuelStationId', adaptRouter(makeFindPurchaseOrderByFilterController()))
  router.get('/purchase-order', adaptRouter(makeListPurchaseOrdersController()))
  router.put('/purchase-order/cancel/:purchaseOrderId', adaptRouter(makeCancelPurchaseOrderController()))
}
