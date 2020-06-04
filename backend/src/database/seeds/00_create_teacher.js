const faker = require('faker/locale/pt_BR')

exports.seed = (knex) => {
  return knex('teacher').del()
    .then(() => {
      // Generate fake teachers
      const teachers = []

      for (let i = 0; i < 10; i++) {
        teachers.push({
          name: faker.name.findName(),
          username: faker.internet.userName(),
          password: faker.internet.password()
        })
      }

      // Inserts seed entries
      return knex('teacher').insert(teachers)
    })
}
