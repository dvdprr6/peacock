const { ipcMain } = require('electron')
const { IPC_ACTIVATE_AUTHORIZATION, IPC_GET_AUTHORIZATION, IPC_GET_AUTH_TOKENS } = require('../utils/constants')
const { authorizationWindow } = require('./auth.window')
const { getAuthTokens } = require('./auth.services')

function initAuth() {
  ipcMain.handle(IPC_ACTIVATE_AUTHORIZATION, async (event, clientId) => {
    try {
      await authorizationWindow(clientId)
      return { clientId: '', clientSecret: '' }//await getTokens()
    }catch(e){
      return { clientId: '', clientSecret: '' }
    }
  })

  ipcMain.handle(IPC_GET_AUTHORIZATION, async (event) => {
    try {
      //return await getTokens()
      return { clientId: '', clientSecret: '' }
    }catch(e){
      return { clientId: '', clientSecret: '' }
    }
  })

  ipcMain.handle(IPC_GET_AUTH_TOKENS, async () => {
    return await getAuthTokens()
  })
}

module.exports = {
  initAuth
}