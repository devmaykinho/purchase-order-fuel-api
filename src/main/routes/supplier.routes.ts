import { Router } from 'express'
import {
  makeFindHomePriceController,
  makeSupplierPricesController,
  makeSupplierController,
  makeListSuppliersController,
  makeListSupplierPricesController,
  makeUpdateSupplierPricesController,
  makeDeleteSupplierPricesController,
  makeDeleteSupplierController
} from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.post('/supplier', adaptRouter(makeSupplierController()))
  router.get('/supplier', adaptRouter(makeListSuppliersController()))
  router.delete('/supplier/:supplierId', adaptRouter(makeDeleteSupplierController()))
  router.post('/supplier-prices/home', adaptRouter(makeFindHomePriceController()))
  router.post('/supplier-prices', adaptRouter(makeSupplierPricesController()))
  router.get('/supplier-prices', adaptRouter(makeListSupplierPricesController()))
  router.put('/supplier-prices', adaptRouter(makeUpdateSupplierPricesController()))
  router.delete('/supplier-prices/:priceId', adaptRouter(makeDeleteSupplierPricesController()))
}
