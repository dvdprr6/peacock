const { getCurrentTrack } = require('./player.repository')

async function getCurrentPlayingTrack(){
  return await getCurrentTrack()
}

module.exports = {
  getCurrentPlayingTrack
}