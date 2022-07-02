const { ipcMain } = require('electron')
const { IPC_ACTIVATE_AUTHORIZATION, IPC_GET_AUTHORIZATION } = require('../utils/constants')
const { authorizationWindow } = require('./auth.window')

function initAuth() {
  ipcMain.handle(IPC_ACTIVATE_AUTHORIZATION, async (event, clientId) => {
    try {
      await authorizationWindow(clientId)
      return { clientId: '', clientSecret: '' }//await getTokens()
    }catch(e){
      return { clientId: '', clientSecret: '' }
    }
  })

  // ipcMain.handle(IPC_GET_AUTHORIZATION, async (event) => {
  //   try {
  //     //return await getTokens()
  //     return { clientId: '', clientSecret: '' }
  //   }catch(e){
  //     return { clientId: '', clientSecret: '' }
  //   }
  // })
}

module.exports = {
  initAuth
}