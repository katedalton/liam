
import Koa        = require('koa')
import bodyparser = require('koa-bodyparser')

import Request from '../@interfaces/WSGI.Request'

import { parseIncomingWSGIRequest } from './parse-request'
//import { x } from './parse-response'

export default class Parser {

  WSGI : Koa

  constructor(Koa : Koa) {
    this.WSGI = Koa
    this.WSGI.use(bodyparser())
  }

  incomingRequest(baseRequest : Koa.BaseRequest) {
    const
      request : any = baseRequest
    //Add identifier
    if (true)
      return parseIncomingWSGIRequest(request as Request)
    else
      return //handle error
  }

  outgoingResponse(processedRequest : Request) {
    
  }

}
