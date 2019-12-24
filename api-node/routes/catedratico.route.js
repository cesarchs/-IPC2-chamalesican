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
const archivadorCatedratico=require('../archivador/archivadorCatedratico')
app.post("/createCatedratico", function(req, res) {
    const body=req.body
    console.log(body);
     let Catedraticos = archivadorCatedratico.crear(body);
    res.json(Catedraticos);
});

app.get("/mostrarCatedratico", function(req, res) {
    let catedraticos=archivadorCatedratico.getListado()
    res.json(catedraticos);
});

app.put("/actualizarCatedratico/:idCatedratico",function(req,res){
    res.json("ruta para actualizar un catedratico")
});

app.delete("/eliminarCatedratico/:idCatedratico",function(req,res){
    res.json("ruta para eliminar un catedratico");
})
//React la exportacion es default export =<nombre del componente>
//si embargo en node la exporta se hace de la siguiente manera
module.exports=app;