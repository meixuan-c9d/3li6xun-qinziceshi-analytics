const { response } = require("express");

module.exports = (request, response, next) => {
  const analyticsToken = request.get('Analytics-Token')
  if (analyticsToken !== '3/aehCPAp5MZYmwUJx9jGA==') {
    return response.sendStatus(400)
  }
  next()
}