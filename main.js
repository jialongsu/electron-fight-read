// main.js

// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('path')

const getConfigs = () => {
  const obj = {};
  const params = process.argv.splice(1).filter((item) => item.includes('='));
  params.forEach((item) => {
    item.match(/\-\-(.+)=(.+)/g);
    if(RegExp.$1) {
      obj[RegExp.$1] = RegExp.$2;
    }
  });
  return obj;
};
console.log('app.isPackaged', process.resourcesPath);

const configs = getConfigs();
const model = process.argv

function createWindow () {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    maximizable: false,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      // nodeIntegrationInWorker: true
    }
  });

  // 加载 index.html
  if(app.isPackaged) {
    // mainWindow.loadFile('./dist/index.html');
    mainWindow.loadURL('http://localhost:8081/');
  } else {
    mainWindow.loadURL('http://localhost:8081/');
  }

  // 打开开发工具
  mainWindow.webContents.openDevTools();

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light';
    } else {
      nativeTheme.themeSource = 'dark';
    }
    return nativeTheme.shouldUseDarkColors;
  });

  ipcMain.handle('dark-mode:light', () => {
    nativeTheme.themeSource = 'light';
  });
  
  ipcMain.handle('dark-mode:dark', () => {
    nativeTheme.themeSource = 'dark';
  });

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system';
    return nativeTheme.shouldUseDarkColors
  });

  ipcMain.handle('dark-mode:themeSource', () => {
    return nativeTheme.themeSource
  });

}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; // 去掉安全警告
