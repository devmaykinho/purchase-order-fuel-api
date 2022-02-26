import setupMiddlewres from './middlewares'
import setupRoutes from './routes'
import express from 'express'

const app = express()
setupMiddlewres(app)
setupRoutes(app)
export default app
