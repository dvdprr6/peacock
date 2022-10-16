const { save, getAll, update, deleteToken } = require('./auth.repository')

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

async function deleteSpotifyAccessTokens(authToken){
  return await deleteToken(authToken)
}

module.exports = {
  saveSpotifyAccessTokens,
  getSpotifyAccessTokens,
  updateSpotifyAccessTokens,
  deleteSpotifyAccessTokens
}