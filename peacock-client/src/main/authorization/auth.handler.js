const { ipcMain } = require('electron')
const { IPC_GET_SPOTIFY_ACCESS_TOKENS, IPC_ACTIVATE_SPOTIFY_ACCESS_TOKENS, IPC_POST_SPOTIFY_ACCESS_TOKENS } = require('../utils/constants')
const { spotifyAccessWindow } = require('./auth.window')
const { getSpotifyAccessTokens, saveSpotifyAccessTokens } = require('./auth.services')

function initSpotifyAccess() {
  ipcMain.handle(IPC_ACTIVATE_SPOTIFY_ACCESS_TOKENS, async (event, authToken) => {
    await spotifyAccessWindow(authToken)
    return getSpotifyAccessTokens()
  })

  ipcMain.handle(IPC_GET_SPOTIFY_ACCESS_TOKENS,  () => {
    return getSpotifyAccessTokens()
  })

  ipcMain.handle(IPC_POST_SPOTIFY_ACCESS_TOKENS, async (event, authToken) => {
    return await saveSpotifyAccessTokens(authToken)
  })
}

module.exports = {
  initSpotifyAccess
}