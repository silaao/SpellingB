const request = require('supertest')

const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Authentication', () => {
  beforeAll(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()

    await request(app).post('/teachers').send({
      name: 'Lucas',
      username: 'linhares',
      password: '12345678'
    })
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should authenticate with valid credentials', async () => {
    const { status } = await request(app).post('/auth').send({
      username: 'linhares',
      password: '12345678'
    })

    expect(status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () => {
    const { status } = await request(app).post('/auth').send({
      username: 'linhares',
      password: '1235555'
    })

    expect(status).toBe(401)
  })

  it('should return a jwt token when authenticated', async () => {
    const response = await request(app).post('/auth').send({
      username: 'linhares',
      password: '12345678'
    })

    expect(response.body).toHaveProperty('token')
  })

  it('should be able to access private routes when authenticated', async () => {
    const auth = await request(app).post('/auth').send({
      username: 'linhares',
      password: '12345678'
    })

    await connection.seed.run()

    const response = await request(app)
      .get('/levels')
      .set('Authorization', `Bearer ${auth.body.token}`)

    expect(response.status).toBe(200)
  })

  it('should not be able to access private routes without jwt token', async () => {
    const response = await request(app).get('/levels')

    expect(response.status).toBe(401)
  })

  it('should not be able to access private routes with invalid jwt token', async () => {
    const response = await request(app)
      .get('/levels')
      .set('Authorization', 'Bearer 123123')

    expect(response.status).toBe(401)
  })
})
