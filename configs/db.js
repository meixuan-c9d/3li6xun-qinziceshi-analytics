const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
const FileAsync = require('lowdb/adapters/FileAsync')
// const adapter = new FileSync('db.json')
const adapter = new FileAsync('db.json')


module.exports = (async () => {
  const db = await low(adapter)
  db
    .defaults({
      uv: 0,
      parentGenderMale: 0, 
      parentGenderFemale: 0,
      childGenderMale: 0,
      childGenderFemale: 0,
      childAgeRange0: 0,
      childAgeRange1: 0,
      childAgeRange2: 0,
      childAgeRange3: 0,
    })
    .write()

  return db
})()