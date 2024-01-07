// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { IpcRendererEvent } from "electron"



// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    getEventsByDate: (month: string, year: string) => ipcRenderer.invoke('get-events-by-date', month, year),
    getEventById: (id: number) => ipcRenderer.invoke('get-event-by-id', id),
    createEvent: (params: any) => ipcRenderer.invoke('create-event', params),
    updateEvent: (id: number, params: any) => ipcRenderer.invoke('update-event', id, params),
    deleteEvent: (id: number) => ipcRenderer.invoke('delete-event', id),
    openDetail: (id: number) => ipcRenderer.invoke('open-detail', id),
    openUpdate: (info: object) => ipcRenderer.invoke('open-update', info),
    onEvent: (cb: (e: IpcRendererEvent, info : object) => void) => ipcRenderer.on('event', cb),
    contextMenu: () => ipcRenderer.invoke('show-context-menu')
  }
)
