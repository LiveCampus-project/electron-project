
export async function getAllEvents(){
    return await window.electron.getAllEvents();
}
export async function getEventsByDate(month: string, year: string) {
    return await window.electron.getEventsByDate(month, year);
}

export async function getEventById(id: number) {
    return await window.electron.getEventById(id);
}

export async function createEvent(params: any) {
    return await window.electron.createEvent(params);
}

export async function deleteEvent(id: number) {
    return await window.electron.deleteEvent(id);
}

export async function updateEvent(id: number, params: any) {
    return await window.electron.updateEvent(id, params);
}

export async function modifierDebut(id:number, date_deb:Date){
    return await window.electron.modifierDebut(id, date_deb);
}

export async function modifierFin(id:number, date_fin:Date) {
    return await window.electron.modifierFin(id, date_fin);
}

export async function modifierTitre(id:number, titre:string){
    return await window.electron.modifierTitre(id, titre);
}

export async function modifierStatut(id:number, status:string) {
    return await window.electron.modifierStatut(id, status); 
}

export async function modifierDebFin(id:number, date_deb:Date, date_fin:Date) {
    return await window.electron.modifierDebFin(id, date_deb, date_fin);
}
