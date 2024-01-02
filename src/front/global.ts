
import { an } from "@fullcalendar/core/internal-common";
import { modifierDebut } from "./utils/utils";

export { }
declare global {
    interface Window {
        "electron": {
            getAllEvents: () => Promise<any>;
            getEventsByDate: (month: string, year: string) => Promise<any>;
            getEventById: (id: number) => Promise<any>;
            createEvent: (params: any) => Promise<any>;
            updateEvent: (id: number, params: any) => Promise<any>;
            modifierDebut: (id:number, date_deb:Date) => Promise<any>;
            modifierFin: (id:number, date_fin:Date) => Promise<any>;
            modifierDebFin:(id:number, date_deb:Date, date_fin:Date) => Promise<any>;
            modifierTitre:(id:number, titre:string) => Promise<any>;
            modifierStatut:(id:number, status:string) => Promise<any>;
            deleteEvent: (id: number) => Promise<any>;
            contextMenu: () => Promise<any>;
            openDetail: (id: number) => Promise<any>;
        }
    }
    function getAllEvents(): Promise<any>;
    function getEventsByDate(month: string, year: string): Promise<any>;
    function getEventById(id: number): Promise<any>;
    function createEvent(params: any): Promise<any>;
    function updateEvent(id: number, params: any): Promise<any>;
    function modifierDebut(id:number, date_deb:Date): Promise<any>;
    function modifierFin(id:number, date_fin:Date): Promise<any>;
    function modifierDebFin(id:number, date_deb:Date, date_fin:Date): Promise<any>;
    function modifierTitre(id:number, titre:string): Promise<any>;
    function modifierStatut(id:number, status:string): Promise<any>;
    function deleteEvent(id: number): Promise<any>;
}

