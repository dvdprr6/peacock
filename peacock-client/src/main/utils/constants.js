/** IPC CONSTANTS */
const IPC_GET_AUTHORIZATION = 'IPC_GET_AUTHORIZATION'
const IPC_ACTIVATE_AUTHORIZATION = 'IPC_ACTIVATE_AUTHORIZATION'

/** SCOPES */
const SCOPES_LISTENING_HISTORY = 'user-read-recently-played user-top-read user-read-playback-position'
const SCOPES_USERS = 'user-read-email user-read-private'
const SCOPES_SPOTIFY_CONNECT = 'user-read-playback-state user-read-currently-playing'

module.exports = {
  IPC_GET_AUTHORIZATION,
  IPC_ACTIVATE_AUTHORIZATION,

  SCOPES_LISTENING_HISTORY,
  SCOPES_USERS,
  SCOPES_SPOTIFY_CONNECT
}