// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.



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
    
    contextMenu: () => ipcRenderer.invoke('show-context-menu')
  }
)
