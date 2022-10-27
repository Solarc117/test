'use strict'
const express = require('express'),
  homeRouter = require('./api/home.js'),
  app = express(),
  { env } = process,
  PORT = env.PORT || 3000

app.use('/', homeRouter)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
