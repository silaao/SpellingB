const defaultLevelWords = require('../../assets/words.json')

exports.seed = async (knex) => {
  const trx = await knex.transaction()
  await trx('level').truncate()
  await trx('word').truncate()

  const levels = defaultLevelWords.map(item => {
    return {
      title: item.level,
      description: '',
      max_time: 15,
      min_time: 5
    }
  })

  await trx('level').insert(levels)

  var interator = 0
  const words = defaultLevelWords.map(item => {
    interator++
    return item.words.map(word => {
      return { word: word, level_id: interator }
    })
  })

  for (let index = 0; index < words.length; index++) {
    await trx('word').insert(words[index])
  }

  await trx.commit()
}
