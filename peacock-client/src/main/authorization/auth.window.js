const { BrowserWindow, net } = require('electron')
const { updateSpotifyAccessTokens } = require('./auth.services')

const spotifyAccessWindow = async (spotifyAccessDto) => {
  let window = new BrowserWindow({
    width: 1100,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: false
    }
  })

  window.setMenuBarVisibility(false)

  const clientId = spotifyAccessDto.clientId
  const clientSecret = spotifyAccessDto.clientSecret
  const scopes = spotifyAccessDto.scopes.map(item => item.name).join(' ')

  const callbackUrl = encodeURIComponent("http://localhost/callback")
  const scopesEncoded = encodeURIComponent(scopes)


  window.loadURL(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${callbackUrl}&scope=${scopesEncoded}`)

  const { session: { webRequest } } = window.webContents

  const filter = { urls: ['http://localhost/callback*'] }

  const destroyAuthorizationWindow = () => {
    if(window){
      window.close()
      window = undefined
    }
  }

  webRequest.onBeforeRequest(filter, async ({ url }) => {
    const callbackUrl = new URL(url)
    const authorizationCode = callbackUrl.searchParams.get('code')

    console.log("authorization code ".concat(authorizationCode))

    // TODO: refactor this to peacock-api
    const urlParams = new URLSearchParams()
    urlParams.append('grant_type', 'authorization_code')
    urlParams.append('code', authorizationCode)
    urlParams.append('redirect_uri', 'http://localhost/callback')

    const base64Encoded = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

    const request = net.request({ method: 'POST', url: 'https://accounts.spotify.com/api/token' })
    request.setHeader('Authorization', `Basic ${base64Encoded}`)
    request.setHeader('Content-Type', 'application/x-www-form-urlencoded ')
    request.write(urlParams.toString(), 'utf-8')

    try{
      request.on('response', response => {
        response.on('data', chunk => {
          const data = Buffer.from(chunk.toJSON().data)
          const refreshAccessTokens = JSON.parse(data.toString('utf8'))

          const spotifyAccessDtoUpdatedDto = {
            ...spotifyAccessDto,
            refreshToken: refreshAccessTokens.refresh_token,
            accessToken: refreshAccessTokens.access_token,
            status: 'ACTIVE'
          }

          updateSpotifyAccessTokens(spotifyAccessDtoUpdatedDto)
        })
      })
    }catch(e){
      console.log(e)
    }finally{
      request.end()
    }

    return destroyAuthorizationWindow()
  })

  window.on('closed', () => {
    window = undefined
  })
}

module.exports = {
  spotifyAccessWindow
}