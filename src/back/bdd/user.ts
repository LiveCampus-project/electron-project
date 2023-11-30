import conn from './connect.js'

export function getAll() {
    return new Promise((res, reject) => {
        conn.query('SELECT * from utilifsateurs', (err: any, result: any) => {
            if (err) reject(err)
            else res(result)
        })

    })
}
export function getById(id: number) {
    return new Promise((res, reject) => {
        conn.query('SELECT * from utilisateurs WHERE id=?', [id], (err: any, result: any) => {
            if (err) reject(err)
            else res(result[0])
        })

    })
}
export function add(nom: string, prenom: string) {
    return new Promise((res, reject) => {
        conn.query('INSERT INTO utilisateurs (nom,prenom) VALUES (?,?)',
            [nom, prenom], (err: any, result: any) => {
                if (err) reject(err)
                else res("Utilisateur ajouté")
            })

    })
}
export function supp(id: number) {
    return new Promise((res, reject) => {
        conn.query('DELETE FROM utilisateurs WHERE id=?',
            [id], (err: any, result: any) => {
                if (err) reject(err)
                else res("Utilisateur supprimé")
            })

    })
}
export function mod(id: number, nom: string, prenom: string) {
    return new Promise((res, reject) => {
        conn.query('UPDATE utilisateurs set nom=?,prenom=? WHERE id=?',
            [nom, prenom, id], (err: any, result: any) => {
                if (err) reject(err)
                else res("Utilisateur modifié")
            })

    })
}
