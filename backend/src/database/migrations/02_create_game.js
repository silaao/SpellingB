exports.up = knex => {
  return knex.schema.createTable('game', (table) => {
    table.bigInteger('id')
    table.boolean('active').defaultTo(true)

    table.integer('level_id')
      .notNullable()
      .references('id')
      .inTable('level')
      .onDelete('CASCADE')

    table.integer('teacher_id')
      .notNullable()
      .references('id')
      .inTable('teacher')
      .onDelete('CASCADE')

    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('game')
}
