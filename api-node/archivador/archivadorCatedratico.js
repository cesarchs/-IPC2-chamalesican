//Requerimo libreria fs para trabajar con archivos en este caso json
const fs = require('fs');
//declaramos un array para guardar estudiantes
let listadoCatedratico=[];

//Creamos un metodo para cargar los estudiantes que existan en el archivo

const cargarDB = () => {
    /*Al hacer el require automaticamente detecta que es un archivo json
    y lo serializa si el archivo esta vacio va tirar un error por ello hacemos
    el try catch*/
    try {
        listadoCatedratico = require('../db/Catedratico.json');
    } catch (error) {
        listadoCatedratico = [];
    }
}

const guardarDB = () => {
    /*Pasa un objeto a formato json*/
    let data = JSON.stringify(listadoCatedratico);
    /*El writeFile 
    Primer argumento: nombre y ubicacion del archivo donde se va a guardar
    De no encontrar el archivo lo crea
    Segundo argumento: data que se va escribir en el archivo
    Tercer argumento: error que se debe manejar si no se puede guardar
    en el archivo*/
    fs.writeFile('db/Catedratico.json', data, (err) => {
        if (err) throw new Error('No se puede grabar', err);
    });
}

const getListado = () => {
    cargarDB();
    return listadoCatedratico;
}
const crear = (objeto) => {
    cargarDB();
    let Catedratico = {
        registroPersonal: objeto.registro,
        nombre:objeto.nombre,
        nacimiento:objeto.nacimiento,
        correo:objeto.correo,
        universidad:objeto.universidad,
        nickname:objeto.nickname,
        contrasena:objeto.contrasena
    }

    listadoCatedratico.push(Catedratico);
    guardarDB();
    return listadoCatedratico
}

module.exports = {
    getListado,
    crear
}