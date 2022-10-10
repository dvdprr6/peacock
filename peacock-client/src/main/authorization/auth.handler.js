const { ipcMain } = require('electron')
const { IPC_ACTIVATE_AUTHORIZATION, IPC_GET_AUTH_TOKENS, IPC_POST_AUTH_TOKENS } = require('../utils/constants')
const { authorizationWindow } = require('./auth.window')
const { getSpotifyAccessTokens, saveSpotifyAccessTokens } = require('./auth.services')

function initAuth() {
  ipcMain.handle(IPC_ACTIVATE_AUTHORIZATION, async (event, authToken) => {
    await authorizationWindow(authToken)
    return getSpotifyAccessTokens()
  })

  ipcMain.handle(IPC_GET_AUTH_TOKENS,  () => {
    return getSpotifyAccessTokens()
  })

  ipcMain.handle(IPC_POST_AUTH_TOKENS, async (event, authToken) => {
    return await saveSpotifyAccessTokens(authToken)
  })
}

module.exports = {
  initAuth
}