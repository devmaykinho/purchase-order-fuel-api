import { Router } from 'express'
import { makeListFuelStationsController, makeBlockFuelStationController } from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.get('/fuelstation', adaptRouter(makeListFuelStationsController()))
  router.patch('/fuelstation/block/:fuelStationId', adaptRouter(makeBlockFuelStationController()))
}
