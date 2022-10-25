const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')


const { credentials } = require('./config')

app.use(cookieParser(credentials.cookieSecret))

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: credentials.cookieSecret,
}))
