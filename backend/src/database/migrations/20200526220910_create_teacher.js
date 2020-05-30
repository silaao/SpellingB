exports.up = (knex) => {
  // O que deve ser feito
  return knex.schema.createTable('teacher', (table) => {
    table.increments('id')
    table.string('name', 100)
    table.string('username', 100)
    table.string('password')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  // O que fazer caso dê erro | CTRL + Z | Rollback
  return knex.schema.dropTable('teacher')
}
