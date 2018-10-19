
import Koa = require('koa')

import Request from '../@interfaces/WSGI.Request'

import { parseIncomingWSGIRequest } from './parse-request'
//import { x } from './parse-response'


export default class Parser {

  WSGI : Koa

  constructor(Koa : Koa) {
    this.WSGI = Koa
  }

  incomingRequest(baseRequest : Koa.BaseRequest) {
    const request : any = baseRequest
    request.xyz = 'Andrea'
    return parseIncomingWSGIRequest(request)
  }

}
