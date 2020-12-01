const debug = require('../configs/debug')
const wrap = require('../utils/wrap')

module.exports = wrap(async (request, response, next) => {
  debug.log(`
request session id
${request.session.id}
  `)

  const childGender = request.params.childGender
  let keyPartial
  if (childGender === 'm') keyPartial = 'Male'
  if (childGender === 'f') keyPartial = 'Female'
  const increaseCounter = require('./query/increase-counter')
  setImmediate(increaseCounter, 'childGender' + keyPartial)
  response.end()
})