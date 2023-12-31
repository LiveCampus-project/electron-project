
import { an } from "@fullcalendar/core/internal-common";
import { IpcRendererEvent } from "electron";

export { }
declare global {
    interface Window {
        "electron": {
            getAllEvents: () => Promise<any>;
            getEventsByDate: (month: string, year: string) => Promise<any>;
            getEventById: (id: number) => Promise<any>;
            createEvent: (params: any) => Promise<any>;
            updateEvent: (id: number, params: any) => Promise<any>;
            deleteEvent: (id: number) => Promise<any>;
            contextMenu: () => Promise<any>;
            openDetail: (id: number) => Promise<any>;
            openUpdate: (info: Object) => Promise<any>;
            onEvent: (cb: (e: IpcRendererEvent, info : object) => void) => void;
        }
    }
    function getAllEvents(): Promise<any>;
    function getEventsByDate(month: string, year: string): Promise<any>;
    function getEventById(id: number): Promise<any>;
    function createEvent(params: any): Promise<any>;
    function updateEvent(id: number, params: any): Promise<any>;
    function deleteEvent(id: number): Promise<any>;
}

