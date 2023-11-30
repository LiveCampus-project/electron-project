
export async function getEventsByDate(month: string, year: string) {
    return await window.electron.getEventsByDate(month, year)
}

export async function getEventById(id: number) {
    return await window.electron.getEventById(id)
}

export async function createEvent(params: any) {
    return await window.electron.createEvent(params)
}

export async function deleteEvent(id: number) {
    return await window.electron.deleteEvent(id)
}

export async function updateEvent(id: number, params: any) {
    return await window.electron.updateEvent(id, params)
}

