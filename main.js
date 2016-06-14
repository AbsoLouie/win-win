const electron = require('electron')
const {app} = electron
const {BrowserWindow} = electron

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

function closeWindow () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

function reopenApp () {
  if (win === null) {
    createWindow()
  }
}

app.on('ready', createWindow)
app.on('window-all-closed', closeWindow)
app.on('activate', reopenApp)
