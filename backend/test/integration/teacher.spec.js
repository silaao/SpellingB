const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Teacher', () => {
  const informationForTeacher = {
    name: 'Lucas Linhares',
    username: 'linhares',
    password: '12345678'
  }

  beforeAll(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create an account for the teacher', async () => {
    const response = await request(app)
      .post('/teachers')
      .send(informationForTeacher)

    expect(response.body).toHaveProperty('id')
  })

  it('should inform if a teacher account with the same username already exists, as the username must be unique', async () => {
    const response = await request(app)
      .post('/teachers')
      .send(informationForTeacher)

    expect(response.status).toBe(409)
    expect(response.body).toHaveProperty('key')
    expect(response.body.key).toBe(informationForTeacher.username)
  })
})
