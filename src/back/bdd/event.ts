import conn from './connect.js'

export function getAllEvent() {
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
export function createEvent(date_deb: Date, date_fin: Date, titre:string, categorie:string, statut:string, description:string, transparence:string) {
    return new Promise((res, reject) => {
        conn.query('INSERT INTO event (date_deb, date_fin, titre, categorie, statut, description, transparence) VALUES (?,?)',
            [date_deb, date_fin, titre, categorie, statut, description, transparence], (err: any, result: any) => {
                if (err) reject(err)
                else res("Evènement ajouté !")
            })

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
export function modifierDebut(id: number, date_deb: Date) {
    return new Promise((res, reject) => {
        conn.query('UPDATE event set date_deb=? WHERE id=?',
            [id, date_deb], (err: any, result: any) => {
                if (err) reject(err)
                else res("Evènement modifié !")
            })

    })
}

export function modifierFin(id: number, date_fin: Date) {
    return new Promise((res, reject) => {
        conn.query('UPDATE event set date_fin=? WHERE id=?',
            [id, date_fin], (err: any, result: any) => {
                if (err) reject(err)
                else res("Evènement modifié !")
            })

    })
}

export function modifierTitre(id: number, titre: string) {
    return new Promise((res, reject) => {
        conn.query('UPDATE event set titre=? WHERE id=?',
            [id, titre], (err: any, result: any) => {
                if (err) reject(err)
                else res("Evènement modifié !")
            })

    })
}

export function modifierStatut(id: number, statut: string) {
    return new Promise((res, reject) => {
        conn.query('UPDATE event set statut=? WHERE id=?',
            [id, statut], (err: any, result: any) => {
                if (err) reject(err)
                else res("Evènement modifié !")
            })

    })
}

export function modifierDebFin(id: number, date_deb: Date, date_fin: Date) {
    return new Promise((res, reject) => {
        conn.query('UPDATE event set (date_deb=?, date_fin=?) WHERE id=?',
            [id, date_deb, date_fin], (err: any, result: any) => {
                if (err) reject(err)
                else res("Evènement modifié !")
            })

    })
}