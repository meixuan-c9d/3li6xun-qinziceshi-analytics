const { request } = require('express')
const debug = require('../configs/debug')
const redisClient = require('../configs/redis')
const { promisify } = require('util')

module.exports = async sessionId => {
  const redisExists = promisify(redisClient.exists).bind(redisClient)
  const exists = await redisExists(`sess:${sessionId}`)
  return !!(+exists)
}