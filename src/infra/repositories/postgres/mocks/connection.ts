import { IMemoryDb, newDb } from 'pg-mem'

export const makeFakeDb = async (entities?: any): Promise<IMemoryDb> => {
  const db = newDb()
  const connection = await db.adapters.createTypeormConnection({
    type: 'postgres',
    entities: entities ?? ['src/infra/repository/postgres/entities/index.ts']
  })
  // create schema
  await connection.synchronize()

  return db
}
