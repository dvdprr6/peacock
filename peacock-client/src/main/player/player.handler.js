const { ipcMain } = require('electron')
const { IPC_GET_PLAYER_CURRENT_TRACK } = require('../utils/constants')
const { getCurrentPlayingTrack } = require('./player.services')

function initPlayer(){
  ipcMain.handle(IPC_GET_PLAYER_CURRENT_TRACK, async event => {
    return getCurrentPlayingTrack()
  })
}

module.exports = { initPlayer }