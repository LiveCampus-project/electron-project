
import { an } from "@fullcalendar/core/internal-common";

export { }
declare global {
    interface Window {
        "electron": {
            getAllEvents: () => Promise<any>;
            getEventByDate: (month: string, year: string) => Promise<any>;
            getEventById: (id: number) => Promise<any>;
            createEvent: (params: any) => Promise<any>;
            updateEvent: (id: number, params: any) => Promise<any>;
            deleteEvent: (id: number) => Promise<any>;
            contextMenu: () => Promise<any>;
            openDetail: (id: number) => Promise<any>;
        }
    }
    function getAllEvents(): Promise<any>;
    function getEventByDate(month: string, year: string): Promise<any>;
    function getEventById(id: number): Promise<any>;
    function createEvent(params: any): Promise<any>;
    function updateEvent(id: number, params: any): Promise<any>;
    function deleteEvent(id: number): Promise<any>;
}

