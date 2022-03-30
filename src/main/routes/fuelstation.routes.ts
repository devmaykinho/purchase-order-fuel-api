import { Router } from 'express'
import { makeListFuelStationsController, makeBlockFuelStationController, makeUpdateFuelStationController, makeActiveFuelStationController } from '../factories'
import { adaptRouter } from '../adapters/express/express-route-adapter'

export default (router: Router): void => {
  router.get('/fuelstation', adaptRouter(makeListFuelStationsController()))
  router.put('/fuelstation', adaptRouter(makeUpdateFuelStationController()))
  router.patch('/fuelstation/block/:fuelStationId', adaptRouter(makeBlockFuelStationController()))
  router.patch('/fuelstation/active/:fuelStationId', adaptRouter(makeActiveFuelStationController()))
}
