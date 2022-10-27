'use strict'
const VIEWS = process.cwd() + '/views'

module.exports = (req, res) => res.sendFile('../views/home.html')
