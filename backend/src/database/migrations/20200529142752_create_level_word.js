exports.up = (knex) => {
  return knex.schema.createTable('level', (table) => {
    table.increments('id')
    table.string('title', 100)
    table.string('description')
    table.integer('max_time')
    table.integer('min_time')
    table.timestamps(true, true)
  }).createTable('word', (table) => {
    table.increments('id')
    table.string('word', 100)
    table.integer('level_id')
    table.timestamps(true, true)

    table.foreign('level_id').references('level.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('word').dropTable('level')
}
