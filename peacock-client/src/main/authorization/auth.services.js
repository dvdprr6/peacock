const { createAuth, getAll } = require('./auth.repository')

async function setAccessTokens(authToken){
  return new Promise(async resolve => {
    const authTokenDto = await createAuth(authToken)
    resolve(authTokenDto)
  })
}

async function getAuthTokens(){
  return new Promise(async resolve => {
    const authTokensDto = await getAll()
    resolve(authTokensDto)
  })
}

module.exports = {
  setAccessTokens,
  getAuthTokens
}