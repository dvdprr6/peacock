const { ipcMain } = require('electron')
const {
  IPC_GET_SPOTIFY_ACCESS_TOKENS,
  IPC_ACTIVATE_SPOTIFY_ACCESS_TOKENS,
  IPC_POST_SPOTIFY_ACCESS_TOKENS,
  IPC_PUT_SPOTIFY_ACCESS_TOKENS,
  IPC_DELETE_SPOTIFY_ACCESS_TOKENS
} = require('../utils/constants')
const { spotifyAccessWindow } = require('./auth.window')
const { getSpotifyAccessTokens, saveSpotifyAccessTokens, updateSpotifyAccessTokens, deleteSpotifyAccessTokens } = require('./auth.services')

function initSpotifyAccess() {
  ipcMain.handle(IPC_ACTIVATE_SPOTIFY_ACCESS_TOKENS, async (event, spotifyAccessTokens) => {
    await spotifyAccessWindow(spotifyAccessTokens)
  })

  ipcMain.handle(IPC_GET_SPOTIFY_ACCESS_TOKENS,  () => {
    return getSpotifyAccessTokens()
  })

  ipcMain.handle(IPC_POST_SPOTIFY_ACCESS_TOKENS, async (event, spotifyAccessTokens) => {
    return await saveSpotifyAccessTokens(spotifyAccessTokens)
  })

  ipcMain.handle(IPC_PUT_SPOTIFY_ACCESS_TOKENS, async (event, spotifyAccessTokens) => {
    return await updateSpotifyAccessTokens(spotifyAccessTokens)
  })

  ipcMain.handle(IPC_DELETE_SPOTIFY_ACCESS_TOKENS, async (event, spotifyAccessTokens) => {
    return await deleteSpotifyAccessTokens(spotifyAccessTokens)
  })
}

module.exports = {
  initSpotifyAccess
}