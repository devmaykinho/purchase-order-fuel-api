import { Router } from 'express'
import { makeFindHomePriceController, makeSupplierPricesController, makeSupplierController, makeListSuppliersController } from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/supplier', adaptRouter(makeSupplierController()))
  router.post('/supplier-prices', adaptRouter(makeSupplierPricesController()))
  router.post('/supplier-prices/home', adaptRouter(makeFindHomePriceController()))
  router.get('/supplier', adaptRouter(makeListSuppliersController()))
}
