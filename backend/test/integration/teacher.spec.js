const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Teacher', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create an account for the teacher', async () => {
    const response = await request(app)
      .post('/teachers')
      .send({
        name: 'Lucas Linhares',
        username: 'linhares',
        password: '12345678'
      })

    expect(response.body).toHaveProperty('id')
  })
})
