import { Router } from 'express'
import {
  makeCreateCustomPriceController,
  makeFindHomePriceController,
  makeFindOrderPriceByFilterController,
  makeListCustomPricesController,
  makeCancelCustomPriceController,
  makeUpdateCustomPriceController
} from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/custom-price', adaptRouter(makeCreateCustomPriceController()))
  router.get('/custom-price', adaptRouter(makeListCustomPricesController()))
  router.put('/custom-price', adaptRouter(makeUpdateCustomPriceController()))

  router.patch('/custom-price/cancel/:customPriceId', adaptRouter(makeCancelCustomPriceController()))
  router.get('/home-price/:fuelStationId', adaptRouter(makeFindHomePriceController()))
  router.post('/order-price', adaptRouter(makeFindOrderPriceByFilterController()))
}
