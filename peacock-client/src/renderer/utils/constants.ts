/** IPC CONSTANTS */
export const IPC_GET_AUTHORIZATION = 'IPC_GET_AUTHORIZATION'
export const IPC_ACTIVATE_AUTHORIZATION = 'IPC_ACTIVATE_AUTHORIZATION'

/** REDIRECT CONSTANTS */
export const DASHBOARD_REDIRECT = '/dashboard'
export const HISTORY_REDIRECT = '/history'
export const AUTHORIZATION_REDIRECT = '/authorization'

/** REDUCER CONSTANTS */
export const SPOTIFY_ACCESS_TOKEN_SLICE = 'spotifyAccessToken'
export const SPOTIFY_ACCESS_SLICE = 'authorizeSpotifyAccess'

/** THUNK CONSTANTS */
export const GET_SPOTIFY_TOKENS_THUNK = 'authorization/getTokens'
export const GET_SPOTIFY_ACCESS_THUNK = 'authorization/getAccess'