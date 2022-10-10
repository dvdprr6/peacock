const { createAuth, getAll, updateAuth } = require('./auth.repository')

async function saveSpotifyAccessTokens(authToken){
  return new Promise(async resolve => {
    const authTokenDto = await createAuth(authToken)
    resolve(authTokenDto)
  })
}

async function getSpotifyAccessTokens(){
  return await getAll()
}

async function updateSpotifyAccessTokens(authToken){
  return await updateAuth(authToken)
}

module.exports = {
  saveSpotifyAccessTokens,
  getSpotifyAccessTokens,
  updateSpotifyAccessTokens
}