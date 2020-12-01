const debug = require('../configs/debug')
const wrap = require('../utils/wrap')

module.exports = wrap(async (request, response, next) => {
  const parentGender = request.params.parentGender
  let keyPartial
  if (parentGender === 'm') keyPartial = 'Male'
  if (parentGender === 'f') keyPartial = 'Female'
  const increaseCounter = require('./query/increase-counter')
  setImmediate(increaseCounter, 'parentGender' + keyPartial)
  response.end()
})