const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow = null

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 728,
        title: 'Peacock',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            webSecurity: false
        }
    })

    mainWindow.setMenuBarVisibility(false)

    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../public/index.html')}`)

    mainWindow.on('closed', () => (mainWindow = null))

    mainWindow.openDevTools()
}

const showWindow = () => {
    createWindow()

    // initAuth()
    // initPlayer()
}

app.on('ready', showWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
