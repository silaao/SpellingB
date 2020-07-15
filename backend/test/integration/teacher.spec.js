const request = require('supertest')
const bcrypt = require('bcryptjs')

const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Teacher', () => {
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
      .send({
        name: 'Pedro Paulo',
        username: 'PP',
        password: '12345678'
      })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('id')
  })

  it('should encrypt teacher password', async () => {
    const response = await request(app)
      .post('/teachers')
      .send({
        name: 'Lucas Linhares',
        username: 'Linhares',
        password: '12345678'
      })

    const compareHash = await bcrypt.compare('12345678', response.body.password)

    expect(response.body).toHaveProperty('password')
    expect(compareHash).toBe(true)
  })

  it('should inform if a teacher account with the same username already exists', async () => {
    const response = await request(app)
      .post('/teachers')
      .send({
        name: 'Lucas Linhares',
        username: 'Linhares',
        password: '12345678'
      })

    expect(response.status).toBe(409)
    expect(response.body).toHaveProperty('username')
    expect(response.body.username).toBe('Linhares')
  })

  it('should be able for a teacher authenticated to edit your information', async () => {
    const { body: teacher } = await request(app)
      .post('/auth')
      .send({
        username: 'Linhares',
        password: '12345678'
      })

    const response = await request(app)
      .put('/teacher')
      .set('Authorization', `Bearer ${teacher.token}`)
      .send({
        username: 'lucas'
      })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('username')
    expect(response.body.username).toBe('lucas')
  })

  it('should be able for a teacher authenticated to view your information', async () => {
    const { body: teacher } = await request(app)
      .post('/auth')
      .send({
        username: 'lucas',
        password: '12345678'
      })

    const response = await request(app)
      .get('/teacher')
      .set('Authorization', `Bearer ${teacher.token}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('name')
    expect(response.body).toHaveProperty('username')
  })

  it('should be able for a teacher authenticated to delete your account', async () => {
    const { body: teacher } = await request(app)
      .post('/auth')
      .send({
        username: 'lucas',
        password: '12345678'
      })

    const response = await request(app)
      .delete('/teacher')
      .set('Authorization', `Bearer ${teacher.token}`)

    expect(response.status).toBe(204)
  })
})
