import { app, BrowserWindow, ipcMain, Menu } from "electron";
import * as path from "path";
import { getAllEvents, getEventById, createEvent, deleteEvent} from './bdd/event.js'


//CRUD event
ipcMain.handle('get-event-by-id', async (event, id) =>{
  getEventById(id).then(data=>console.log(data)).catch(err=>console.log(err));
  "get-event-by-id " + id
}) 
  
ipcMain.handle('get-all-events', async (event) =>{
  getAllEvents().then(data=>console.log(data)).catch(err=>console.log(err));
  "get-all-events"
})

ipcMain.handle('get-events-by-date', async (event, month,year) => {
  getEventsByDate(month, year).then(data=>console.log(data)).catch(err=>console.log(err));
  return 'get-events-by-date ' + month +' '+ year;
})

ipcMain.handle('create-event', async (event, params) => {
  createEvent(params).then(data=>console.log(data)).catch(err=>console.log(err));
  return "create-event " + params;
})

ipcMain.handle('update-event', async (event, id, params) => {
  updateEvent(id, params).then(data=>console.log(data)).catch(err=>console.log(err));
  return "update-event "+ ' ' + id+ ' ' + params;
})

ipcMain.handle('delete-event', async (event, id) => {
  deleteEvent(id).then(data=>console.log(data)).catch(err=>console.log(err));
  return "delete-event " + id;
})

ipcMain.handle('open-detail', async (event, id) => { 
   createWindow2();
 })

//

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
  mainWindow.loadFile(path.join(__dirname, "../../newPage.html"));
  mainWindow.setMenu(menu)
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  createWindow2();
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
