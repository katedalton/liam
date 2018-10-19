
import Koa = require('koa')
import RequestBody from './WSGI.RequestBody'

export default interface Request extends Koa.BaseRequest {
  method:                          string,
  url:                             string,
  header:                          object,
  body:                            RequestBody
}
