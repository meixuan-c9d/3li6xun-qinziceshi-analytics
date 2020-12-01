const debug = require('../../configs/debug')
module.exports = key => {
  ;(async () => {
    const db = await require('../../configs/db')
    db
      .update(key, count => count + 1)
      .write()
    debug.log(`
increase counter of ${key}
    `)
  })()
}