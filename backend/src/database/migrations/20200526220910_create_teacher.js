exports.up = (knex) => {
  // O que deve ser feito
  return knex.schema.createTable('teacher', (table) => {
    table.increments()
    table.string('name')
    table.timestamps()
  })
}

exports.down = (knex) => {
  // O que fazer caso dê erro | CTRL + Z | Rollback
  return knex.schema.dropTable('teacher')
}
