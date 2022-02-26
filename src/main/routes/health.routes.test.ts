import request from 'supertest'
import app from '../config/app'

describe('HealthRoute - Integration Test', () => {
  it('should return 200 when call api health', async () => {
    await request(app)
      .get('/api/health')
      .send()
      .expect(200)
  })
})
