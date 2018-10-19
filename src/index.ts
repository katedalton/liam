
import Koa       = require('koa')
import Firebase  = require('firebase')

import Parser from './helpers/parser'

const
  app    = new Koa(),
  parser = new Parser(app),
  config = {
    projectId:         "liam-ab541",
    authDomain:        "liam-ab541.firebaseapp.com",
    storageBucket:     "liam-ab541.appspot.com",
    databaseURL:       "https://liam-ab541.firebaseio.com",
    apiKey:            "AIzaSyArz2mYcusoD7zfX6y5cbguqWBS8HU7q34",
    messagingSenderId: "111004570004"
  }

Firebase.initializeApp(config)

app.use(async (ctx) => {

  const
    request = ctx.request,
    response = ctx.response
  
  parser.incomingRequest(request)

  ctx.body = JSON.stringify({
    xyz : true
  })
  
})

app.listen(3000)
