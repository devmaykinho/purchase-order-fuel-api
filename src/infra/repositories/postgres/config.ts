import { ConnectionOptions } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config()

export const config: ConnectionOptions = {
  type: 'postgres',
  host: 'ec2-54-208-139-247.compute-1.amazonaws.com',
  port: 5432,
  database: 'd3heab1fhft3m9',
  username: 'fycpoikxfhhjdr',
  password: '88e9e41d7e474002b73077156709c5976d4afe98acd157b625e8afc4092badfa',
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  entities: ['dist/infra/repositories/postgres/entities/index.js']
}
