import { IUser } from "../../interfaces/user";

export function afficheUsers(users: IUser[], elem: HTMLElement) {



    elem.innerHTML = ""
    users.forEach(user => {
        const ligne = document.createElement('tr')
        const utils = document.createElement('td')
        const supp = document.createElement('button')
        const modif = document.createElement('button')
        supp.innerHTML = "supp"
        modif.innerHTML = "modif"
        supp.addEventListener('click', () => {
            console.log('test');
            if (user.id)
                suppUser(user.id)
        })
        modif.addEventListener('click', () => {
            if (user.id)
                modifUser(user.id)
        })
        ligne.innerHTML = `<td>${user.id}</td>
    <td>${user.nom}</td>
    <td>${user.prenom}</td>
   `
        utils.appendChild(supp)
        utils.appendChild(modif)
        ligne.appendChild(utils)
        elem.appendChild(ligne)
    })

}

async function suppUser(id: number) {
    const tableUsers = document.getElementById('tableUsers');
    await window.electron.suppUser(id)
    const result = await window.electron.getUsers();
    if (tableUsers)
        afficheUsers(result, tableUsers)
}
async function modifUser(id: number) {
    const nom = <HTMLInputElement>document.getElementById('nom');
    const prenom = <HTMLInputElement>document.getElementById('prenom');
    const btnForm = document.querySelector('#formAjout>button')
    const form = <HTMLFormElement>document.querySelector('#formAjout')
    const tableUsers = document.getElementById('tableUsers');

    const userMod = await window.electron.getUserById(id)
    console.log(userMod);
    nom.value = userMod.nom
    prenom.value = userMod.prenom
    if (btnForm)
        btnForm.innerHTML = "Modifier"

    form.onsubmit = async (event) => {
        event.preventDefault()
        await window.electron.modUser({ id, nom: nom.value, prenom: prenom.value })
        const result = await window.electron.getUsers();
        if (tableUsers)
            afficheUsers(result, tableUsers)
        nom.value = ""
        prenom.value = ""
        if (btnForm)
            btnForm.innerHTML = "Ajouter"
        form.onsubmit = async (event) => {
            event.preventDefault()
            console.log(await ajouteUser(nom.value, prenom.value));
            const result = await window.electron.getUsers();
            if (tableUsers)
                afficheUsers(result, tableUsers)
        }

    }

}

export async function ajouteUser(nom: string, prenom: string) {
    return await window.electron.addUser({ nom, prenom })
}
