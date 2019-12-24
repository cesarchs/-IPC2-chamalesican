//Requerimo libreria fs para trabajar con archivos en este caso json
const fs = require('fs');
//declaramos un array para guardar estudiantes
let listadoEstudiante=[];

//Creamos un metodo para cargar los estudiantes que existan en el archivo

const cargarDB = () => {
    /*Al hacer el require automaticamente detecta que es un archivo json
    y lo serializa si el archivo esta vacio va tirar un error por ello hacemos
    el try catch*/
    try {
        listadoEstudiante = require('../db/Estudiantes.json');
    } catch (error) {
        listadoEstudiante = [];
    }
}

const guardarDB = () => {
    /*Pasa un objeto a formato json*/
    let data = JSON.stringify(listadoEstudiante);
    /*El writeFile 
    Primer argumento: nombre y ubicacion del archivo donde se va a guardar
    De no encontrar el archivo lo crea
    Segundo argumento: data que se va escribir en el archivo
    Tercer argumento: error que se debe manejar si no se puede guardar
    en el archivo*/
    fs.writeFile('db/Estudiantes.json', data, (err) => {
        if (err) throw new Error('No se puede grabar', err);
    });
}

const getListado = () => {
    cargarDB();
    return listadoEstudiante;
}
const crear = (objeto) => {
    cargarDB();
    let Estudiante = {
        carnet: objeto.carnet,
        nombre:objeto.nombre,
        nacimiento:objeto.nacimiento,
        telefono:objeto.telefono,
        correo:objeto.correo,
        universidad:objeto.universidad,
        nacionalidad:objeto.nacionalidad,
        nickname:objeto.nickname,
        contrasena:objeto.contrasena
    }

    listadoEstudiante.push(Estudiante);
    guardarDB();
    return listadoEstudiante
}

module.exports = {
    getListado,
    crear
}