import { Router } from 'express'
import {
  makeCreateCustomPriceController,
  makeFindHomePriceController,
  makeFindOrderPriceByFilterController,
  makeListCustomPricesController
} from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/custom-price', adaptRouter(makeCreateCustomPriceController()))
  router.get('/custom-price', adaptRouter(makeListCustomPricesController()))
  router.get('/home-price/:fuelStationId', adaptRouter(makeFindHomePriceController()))
  router.post('/order-price', adaptRouter(makeFindOrderPriceByFilterController()))
}
