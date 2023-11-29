import { IUser } from "../interfaces/user";

export { }
declare global {
    interface Window {
        "electron": {
            getUsers: () => Promise<any>;
            getUserById: (id: number) => Promise<any>;
            addUser: (user: IUser) => Promise<any>;
            suppUser: (id: number) => Promise<any>;
            modUser: (user: IUser) => Promise<any>;
            contextMenu: () => Promise<any>;
        }
    }
    function afficheUsers(result: any, tableUsers: HTMLElement): void
    function ajouteUser(value: string, value1: string): any
}

