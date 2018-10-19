
import Koa = require('koa')

export default interface Request extends Koa.BaseRequest {
  xyz : string
}
