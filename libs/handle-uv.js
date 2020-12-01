const debug = require('../configs/debug')
const wrap = require('../utils/wrap')

module.exports = wrap(async (request, response, next) => {
  debug.log(`
    request session id
    ${request.session.id}
  `)

  const checkIfSessionExists = require('./check-if-session-exists')
  const ifSessionExists = await checkIfSessionExists(request.session.id)
  if (!ifSessionExists) {
    debug.log(`
      session not exists
    `)
    const increaseCounter = require('./query/increase-counter')
    setImmediate(increaseCounter, 'uv')
    response.end()
  } else {
    debug.log(`
      session exists
    `)
    response.end()
  }
})