
import Koa      = require('koa')
import Firebase = require('firebase')

import Authenticator from './lib/authenticator'
import Parser        from './lib/parser'

const
  app    = new Koa(),
  auth   = new Authenticator(),
  parser = new Parser(app)

//Firebase.initializeApp(JSON.parse(process.env.FirebaseConfig as string))

app.use(async (ctx) => {

  const request = parser.incomingRequest(ctx.request)

  ctx.body = 'Hi.'
  
})

app.listen(process.env.PORT)
