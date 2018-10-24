
import Koa        = require('koa')
import bodyparser = require('koa-bodyparser')

import Request       from '../@interfaces/WSGI.Request'

import Authenticator from './authenticator'

import * as parseContent  from './parse-content'
import * as parseRequest  from './parse-request'
import * as parseResponse from './parse-response'

export default class api {

  WSGI : Koa

  constructor(Koa : Koa) {
    
    this.WSGI = Koa
    this.WSGI.use(bodyparser())

    console.log(parseContent.read('reference/init/init').name)

  }

  incomingRequest(baseRequest : Koa.BaseRequest) {
    const request : any = baseRequest
    if (baseRequest.header['bot'] == 'Liam') //implement proper auth_sys
      return parseRequest.incomingWSGIRequest(request as Request)
    else
      return //handle error
  }

  outgoingResponse(processedRequest : Request) {

  }

}
