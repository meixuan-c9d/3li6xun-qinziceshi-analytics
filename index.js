require('dotenv').config()
const debug = require('./configs/debug')
const express = require('express')
const app = express()

;(async () => {
  await require('./configs/db')

  const middlewareSession = require('./middlewares/session')
  app.use(middlewareSession)

  const middlewareCors = require('cors')
  app.use(middlewareCors())

  const routerQinziceshi = require('./routers/qinziceshi')
  app.use('/qinziceshi',routerQinziceshi)

  app.listen(process.env.LISTEN_PORT, () => {
    debug.log(`analytics running at ${process.env.LISTEN_PORT}`)
  })
})()