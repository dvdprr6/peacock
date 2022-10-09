const { ipcMain } = require('electron')
const { IPC_ACTIVATE_AUTHORIZATION, IPC_GET_AUTHORIZATION, IPC_GET_AUTH_TOKENS, IPC_SAVE_AUTH_TOKENS } = require('../utils/constants')
const { authorizationWindow } = require('./auth.window')
const { getAuthTokens, setAccessTokens } = require('./auth.services')

function initAuth() {
  ipcMain.handle(IPC_ACTIVATE_AUTHORIZATION, async (event, clientId) => {
    try {
      await authorizationWindow(clientId)
      return { clientId: '', clientSecret: '' }
    }catch(e){
      return { clientId: '', clientSecret: '' }
    }
  })

  ipcMain.handle(IPC_GET_AUTH_TOKENS, async () => {
    return await getAuthTokens()
  })

  ipcMain.handle(IPC_SAVE_AUTH_TOKENS, async (event, authToken) => {
    return await setAccessTokens(authToken)
  })
}

module.exports = {
  initAuth
}