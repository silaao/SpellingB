exports.up = knex => {
  return knex.schema.createTable('teacher', (table) => {
    table.increments('id')
    table.string('name', 100)
    table.string('username', 100)
    table.string('password')
    table.timestamps(true, true)

    table.unique('username')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('teacher')
}
