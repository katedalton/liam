
import Request from '../@interfaces/WSGI.Request'

function incomingRequest(request : Request) {

  console.log(request.xyz)

}

export { incomingRequest as parseIncomingWSGIRequest }
