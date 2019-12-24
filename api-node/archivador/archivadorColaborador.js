//Requerimo libreria fs para trabajar con archivos en este caso json
const fs = require('fs');
//declaramos un array para guardar colaboradores
let listadoColaboradore=[];

//Creamos un metodo para cargar los colaboradores que existan en el archivo

const cargarDB = () => {
    /*Al hacer el require automaticamente detecta que es un archivo json
    y lo serializa si el archivo esta vacio va tirar un error por ello hacemos
    el try catch*/
    try {
        listadoColaboradore = require('../db/Colaborador.json');
    } catch (error) {
        listadoColaboradore = [];
    }
}

const guardarDB = () => {
    /*Pasa un objeto a formato json*/
    let data = JSON.stringify(listadoColaboradore);
    /*El writeFile 
    Primer argumento: nombre y ubicacion del archivo donde se va a guardar
    De no encontrar el archivo lo crea
    Segundo argumento: data que se va escribir en el archivo
    Tercer argumento: error que se debe manejar si no se puede guardar
    en el archivo*/
    fs.writeFile('db/Colaborador.json', data, (err) => {
        if (err) throw new Error('No se puede grabar', err);
    });
}

const getListado = () => {
    cargarDB();
    return listadoColaboradore;
}
const crear = (objeto) => {
    cargarDB();
    let Colaborador = {
        carnet: objeto.carnet,
        nombre:objeto.nombre,
        nacimiento:objeto.nacimiento,
        telefono:objeto.telefono,
        correo:objeto.correo,
        nickname:objeto.nickname,
        contrasena:objeto.contrasena
    }

    listadoColaboradore.push(Colaborador);
    guardarDB();
    return listadoColaboradore
}

module.exports = {
    getListado,
    crear
}