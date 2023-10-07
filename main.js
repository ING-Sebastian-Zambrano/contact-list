


const nombre = document.querySelector('.nombre')
const apellido = document.querySelector('.apellido')
const numero = document.querySelector('.numero')
const btnAgregarTarea = document.querySelector('.btn-agregar-tareas')
const identidad = document.querySelector('.identidad') 
const ciudad = document.querySelector('.ciudad')
const direccion = document.querySelector('.direccion')

const ListadoTareas = document.querySelector('.Listado-Tareas')
const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        apellido: apellido.value,
        identidad: identidad.value,
        numero: numero.value,
        ciudad : ciudad.value ,
        direccion: direccion.value

    }
    guardarContacto(db, contacto)
}
mostrarLista(db, ListadoTareas)