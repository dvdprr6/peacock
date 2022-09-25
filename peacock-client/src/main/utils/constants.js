/** IPC CONSTANTS */
const IPC_GET_AUTH_TOKENS = 'IPC_GET_AUTH_TOKENS'
const IPC_GET_AUTHORIZATION = 'IPC_GET_AUTHORIZATION'
const IPC_ACTIVATE_AUTHORIZATION = 'IPC_ACTIVATE_AUTHORIZATION'

/** SCOPES */
// REFERENCE: https://developer.spotify.com/documentation/general/guides/authorization/scopes/
const SCOPES_LISTENING_HISTORY = 'user-read-recently-played user-top-read user-read-playback-position'
const SCOPES_USERS = 'user-read-email user-read-private'
const SCOPES_SPOTIFY_CONNECT = 'user-read-playback-state user-read-currently-playing'

/** URL */
const LOCALHOST_URL = 'http:localhost:8080/peacock-api/api'
const HTTP_GET = 'GET'
const HTTP_PUT = 'PUT'
const HTTP_POST = 'POST'
const HTTP_DELETE = 'DELETE'

module.exports = {
  IPC_GET_AUTHORIZATION,
  IPC_ACTIVATE_AUTHORIZATION,

  SCOPES_LISTENING_HISTORY,
  SCOPES_USERS,
  SCOPES_SPOTIFY_CONNECT,

  LOCALHOST_URL,
  HTTP_GET,
  HTTP_PUT,
  HTTP_POST,
  HTTP_DELETE
}