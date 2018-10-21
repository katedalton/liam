
import Request from '../@interfaces/WSGI.Request'

function incomingRequest(request : Request) {

  // headers | body | queryResult
  return [
    {
      protocol:                    request.protocol,
      method:                      request.method,
      header:                      request.header,
      headers:                     request.headers,
      origin:                      request.origin,
      host:                        request.host,
      href:                        request.href,
      url:                         request.url,
    }, {
      responseId:                  request.body.responseId,
      session:                     request.body.session,
      originalDetectIntentRequest: request.body.originalDetectIntentRequest
    }, {
      text:                        request.body.queryResult.queryText,
      action:                      request.body.queryResult.action,
      languageCode:                request.body.queryResult.languageCode,
      allRequiredParamsPresent:    request.body.queryResult.allRequiredParamsPresent,
      parameters:                  request.body.queryResult.parameters,
      speechRecognitionConfidence: request.body.queryResult.speechRecognitionConfidence,
      intentDetectionConfidence:   request.body.queryResult.intentDetectionConfidence,
      intent:                      request.body.queryResult.intent,
      diagnosticInfo:              request.body.queryResult.diagnosticInfo
    }
  ]

}

export { incomingRequest as incomingWSGIRequest }
