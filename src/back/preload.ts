// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { IUser } from "../interfaces/user"

// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    getUsers: () => ipcRenderer.invoke('get-users'),
    getUserById: (id: number) => ipcRenderer.invoke('get-user-by-id', id),
    addUser: (user: IUser) => ipcRenderer.invoke('add-user', user),
    suppUser: (id: number) => ipcRenderer.invoke('supp-user', id),
    modUser: (user: IUser) => ipcRenderer.invoke('mod-user', user),
    contextMenu: () => ipcRenderer.invoke('show-context-menu')
  }
)
