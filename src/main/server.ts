import env from './config/env'
import { config } from '../infra/repositories/postgres/config'

import 'reflect-metadata'
import { createConnection } from 'typeorm'

createConnection(config)
  .then(async () => {
    const app = await (await import ('./config/app')).default
    app.listen(env.port, () => {
      console.log(`server running on port ${env.port}`)
    })
  }).catch(console.error)
