exports.seed = async (knex) => {
  await knex('level').del()
  return await knex('level').insert([
    { title: 'Beginner', description: 'for beginners', max_time: 10, min_time: 4 },
    { title: 'Intermediate', description: 'for intermediates', max_time: 12, min_time: 5 },
    { title: 'Advanced', description: 'for advanceds', max_time: 15, min_time: 6 }
  ])
}
