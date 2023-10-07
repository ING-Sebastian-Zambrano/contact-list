const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const mostrarLista = (db, parentNode) => {
    let claves = Object.keys(db)
    console.log(claves)
    for (claves of claves) {
        let contacto = JSON.parse(db.getItem(claves))
        crearContacto(parentNode, contacto, db)

    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('h3')
    let identidadContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let ciudadContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    identidadContacto.innerHTML = contacto.identidad
    numeroContacto.innerHTML = contacto.numero
    ciudadContacto.innerHTML = contacto.ciudad
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = ' delete_forever'

    divContacto.classList.add('Tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'

    }


    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(identidadContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(ciudadContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)


}


