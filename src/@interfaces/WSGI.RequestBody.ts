
import Koa = require('koa')
import Request from './WSGI.Request'

export default interface RequestBody extends Request {
  responseId:                      string,
  session:                         string,
  queryResult:                     QueryResult,
  originalDetectIntentRequest:     ODRI
}

interface QueryResult {
  queryText:                       string,
  action:                          string,
  languageCode:                    string,
  parameters:                      object, //QueryResult_Parameters,
  allRequiredParamsPresent:        boolean,
  speechRecognitionConfidence:     number,
  intentDetectionConfidence:       number,
  intent:                          QueryResult_Intent,
  diagnosticInfo:                  object
}

interface QueryResult_Intent {
  name:                            string,
  displayName:                     string
}

interface ODRI {
  source:                          string,
  version:                         string,
  payload:                         object
}
