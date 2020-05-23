const { app, BrowserWindow } = require("electron")
const path = require("path")
const url = require("url")

function createWindow () {
  const window = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: path.join(__dirname, "/img/icon_placeholder.jpg"),
    webPreferences: {
      //preload: path.join(__dirname, "js/init.js"),
      nodeIntegration: true,
      enableRemoteModule: true
    },
    frame: false
  })

  window.loadURL(url.format({
    pathname: path.join(__dirname, "/app/index.html"),
    protocol: "file:",
    slashes: true
  }));
}

app.whenReady().then(() => {
  createWindow()
  
  app.on("activate", function () {
    // macOS dock functionality
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", function () {
  // macOS menu functionality
  if (process.platform !== "darwin") app.quit()
})