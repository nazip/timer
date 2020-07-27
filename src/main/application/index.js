import { app, BrowserWindow } from 'electron';

export default class TimerApp {
  constructor() {
    this.subsribeForAppEvents();
    app.whenReady().then(() => this.createWindow());
  }

  createWindow() {
    this.window = new BrowserWindow({
      title: CONFIG.name,
      width: CONFIG.width,
      height: CONFIG.height,
      maxWidth: CONFIG.width,
      maxHeight: CONFIG.height,
      minWidth: CONFIG.width,
      minHeight: CONFIG.height,
      titleBarStyle: 'hidden',
      frame: false,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    this.window.loadFile('renderer/index.html')

    // this.window.webContents.openDevTools({mode: 'detach'});
  
    this.window.on('closed', () => {
      this.window = null
    })
  }

  subsribeForAppEvents() {
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
    
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        this.createWindow()
      }
    })
  }




} 
