const { saveAccessTokens, getAll } = require('./auth.repository')

function setAccessTokens(clientId, clientSecret, url){
  const body = {
    clientId: clientId,
    clientSecret: clientSecret,
    url: url
  }

  saveAccessTokens(body)
  // const callbackUrl = new URL(url)
  // const authorizationCode = callbackUrl.searchParams.get('code')
  //
  // const urlParams = new URLSearchParams()
  // urlParams.append('grant_type', 'authorization_code')
  // urlParams.append('code', authorizationCode)
  // urlParams.append('redirect_uri', 'http://localhost/callback')
  // const base64Encoded = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
  //
  // const body = {
  //   authBase64Encoded: base64Encoded,
  //   urlParams: urlParams.toString()
  // }
  //
  // saveAccessTokens()

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