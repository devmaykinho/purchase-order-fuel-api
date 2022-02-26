import { ConnectionOptions } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config()

export const config: ConnectionOptions = {
  type: 'postgres',
  host: 'ec2-3-230-149-158.compute-1.amazonaws.com',
  port: 5432,
  database: 'd4qs4766vh59t7',
  username: 'mmuqlxlfswenwg',
  password: '2b3903c1cd28b111aebc7598c016340418631e6d6a75a50127343d1789eaab18',
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  entities: ['dist/infra/repositories/postgres/entities/index.js']
}
