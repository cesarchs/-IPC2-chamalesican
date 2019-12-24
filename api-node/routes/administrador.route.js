const express = require("express");
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
const bodyParser=require('body-parser');
app.use(bodyParser.json({ extended:false }))
const archivadorAdministrador=require('../archivador/archivadorAdministrador')

app.post("/createAdministrador", function(req, res) {
    const body=req.body
    console.log(body);
     let administrador = archivadorAdministrador.crear(body);
    res.json(administrador);
});

app.get("/mostrarAdministrador", function(req, res) {
    let administrador=archivadorAdministrador.getListado()
    res.json(administrador);
});

app.put("/actualizarAdministrador/:idAdministrador",function(req,res){
    res.json("ruta para actualizar un administrador")
});

app.delete("/eliminarAdministrador/:idAdministrador",function(req,res){
    res.json("ruta para eliminar un Administrador");
})
//React la exportacion es default export =<nombre del componente>
//si embargo en node la exporta se hace de la siguiente manera
module.exports=app;