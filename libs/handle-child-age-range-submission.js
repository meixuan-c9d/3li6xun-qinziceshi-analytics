const debug = require('../configs/debug')
const wrap = require('../utils/wrap')

module.exports = wrap(async (request, response, next) => {
  const childAgeRange = request.params.childAgeRange
  const increaseCounter = require('./query/increase-counter')
  setImmediate(increaseCounter, 'childAgeRange' + childAgeRange)
  response.end()
})