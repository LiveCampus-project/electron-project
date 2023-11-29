import { app, BrowserWindow, ipcMain, Menu } from "electron";
import * as path from "path";
import { getAll, getById, add, supp, mod } from './bdd/user.js'


//Zone de handle
ipcMain.handle('get-users', async (event) => await getAll())
ipcMain.handle('get-user-by-id', async (event, params) => {
  return await getById(params)
})
ipcMain.handle('add-user', async (event, params) => {
  return await add(params.nom, params.prenom)
})
ipcMain.handle('supp-user', async (event, params) => {
  return await supp(params)
})
ipcMain.handle('mod-user', async (event, params) => {
  return await mod(params.id, params.nom, params.prenom)
})
ipcMain.handle('show-context-menu', async (event) => {

  const win: any = BrowserWindow.fromWebContents(event.sender)
  menu.popup(win)
})

//Zone déclaration menus
const templateMenu: any = [
  {
    label: "Fichier",
    submenu: [
      {
        label: "test",
        click: () => {
          //ouvrir une deuxième fenètre
          createWindow2()
        }
      }, {
        type: "separator"
      }, {
        label: "Fermer", role: "quit"
      }]
  }
]
const menu = Menu.buildFromTemplate(templateMenu)

//Zone des chargement de fenettres
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
    width: 800,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../../index.html"));
  mainWindow.setMenu(menu)
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}
//Zone des chargement de fenettres
function createWindow2() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
    width: 800,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../../detail.html"));

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
