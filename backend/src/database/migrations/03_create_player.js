exports.up = knex => {
  return knex.schema.createTable('player', (table) => {
    table.increments('id')
    table.string('name', 100)
    table.integer('score')

    table.integer('game_id')
      .notNullable()
      .references('id')
      .inTable('game')
      .onDelete('CASCADE')

    table.timestamps(true, true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('player')
}
