const faker = require('faker/locale/pt_BR')

exports.seed = (knex) => {
  return knex('teacher').del()
    .then(() => {
      const teachers = []

      for (let i = 0; i < 10; i++) {
        teachers.push({
          name: faker.name.findName(),
          username: faker.internet.userName(),
          password: faker.internet.password()
        })
      }

      return knex('teacher').insert(teachers)
    })
}
