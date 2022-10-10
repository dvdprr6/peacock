const { save, getAll, update } = require('./auth.repository')

async function saveSpotifyAccessTokens(authToken){
  return new Promise(async resolve => {
    const authTokenDto = await save(authToken)
    resolve(authTokenDto)
  })
}

async function getSpotifyAccessTokens(){
  return await getAll()
}

async function updateSpotifyAccessTokens(authToken){
  return await update(authToken)
}

module.exports = {
  saveSpotifyAccessTokens,
  getSpotifyAccessTokens,
  updateSpotifyAccessTokens
}