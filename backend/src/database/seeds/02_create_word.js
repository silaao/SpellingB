exports.seed = async (knex) => {
  await knex('word').del()
  return await knex('word').insert([
    { word: 'Beginner', level_id: '1' },
    { word: 'Apple', level_id: '1' },
    { word: 'Ironic', level_id: '2' },
    { word: 'Whom', level_id: '2' },
    { word: 'Litteraly', level_id: '3' }
  ])
}
