
import Koa      = require('koa')
import Firebase = require('firebase')
import Cryptum  = require('cryptum')
import dotenv   = require('dotenv')

import Authenticator from './lib/authenticator'
import Parser        from './lib/parser'

const
  app    = new Koa(),
  parser = new Parser(app),
  auth   = new Authenticator(),
  port   = process.env.Port

dotenv.config({ path: '../.env'})

Firebase.initializeApp(JSON.parse(process.env.FirebaseConfig as string))

app.use(async (ctx) => {

  debugger
  ctx.request.headers

  const
    request = parser.incomingRequest(ctx.request)

  ctx.body = 'Hi.'
  
})

app.listen(port, () => console.log('HTTP server listening on port ' + port))
