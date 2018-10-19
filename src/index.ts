
import Koa       = require('koa')
import Firebase  = require('firebase')

const
  app = new Koa(),
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
  
  console.log(request)

  ctx.body = 'Hello Koa'
  
})

app.listen(3000)
