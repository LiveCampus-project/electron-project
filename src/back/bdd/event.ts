import conn from './connect.js'
import { IEvent } from '../../interfaces/event.js'


export function getAllEvents() {
    return new Promise((res, reject) => {
        conn.query('SELECT * FROM event', (err: any, result: any) => {
            if (err) reject(err)
            else res(result)
        })
    })
}
export function getEventById(id: number) {
    return new Promise((res, reject) => {
        conn.query('SELECT * from event WHERE id=?', [id], (err: any, result: any) => {
            if (err) reject(err)
            else res(result[0])
        })

    })
}
export function getEventByDate(month:number, year:number) {
    return new Promise((res, reject) => {
        conn.query('SELECT * from event WHERE MONTH(date_deb)=? AND YEAR(date_deb)=?', [month, year], (err: any, result: any) => {
            if (err) reject(err)
            else res(result[0])
        })
    })
}

export function createEvent(params:IEvent) {
    
    return new Promise((res, reject) => {
        // conn.query('INSERT INTO event (date_deb, date_fin, titre, categorie, statut, description, transparence) VALUES (?,?,?,?,?,?,?)',
        //     [params.date_debut, params.date_fin, params.titre, params.categorie, params.status, params.description, params.transparence], (err: any, result: any) => {
        //         if (err) reject(err)
        //         else res("Evènement ajouté !")
        //     })
        conn.query(
            "INSERT INTO event (date_deb, date_fin, titre, categorie, statut, description, transparence) VALUES ('2024-01-01','2024-01-02','titre','une','en cours','desc','trans')",
            (err: any, result: any) => {
                if (err) reject(err)
                else res("Evènement ajouté !")
            }
        );
    })
}
export function deleteEvent(id: number) {
    return new Promise((res, reject) => {
        conn.query('DELETE FROM event WHERE id=?',
            [id], (err: any, result: any) => {
                if (err) reject(err)
                else res("Utilisateur supprimé")
            })

    })
}

//Modifier
export function updateEvent(id:number, params:IEvent) {
    return new Promise((res, reject) => {
        conn.query('REPLACE INTO event (id, date_deb, date_fin, titre, categorie, statut, description, transparence) VALUES (?,?,?,?,?,?,?)',
            [id, params.date_debut, params.date_fin, params.titre, params.categorie, params.status, params.description, params.transparence], (err: any, result: any) => {
                if (err) reject(err)
                else res("Evènement ajouté !")
            })
    })
}
