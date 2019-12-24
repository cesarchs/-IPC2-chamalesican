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
const archivadorEstudiante=require('../archivador/archivadorEstudiante')
app.post("/createEstudiante", function(req, res) {
    const body=req.body
    console.log(body);
     let Estudiantes = archivadorEstudiante.crear(body);
    res.json(Estudiantes);
});

app.get("/mostrarEstudiantes", function(req, res) {
    let estudiantes=archivadorEstudiante.getListado()
    res.json(estudiantes);
});

app.put("/actualizarEstudiante/:idEstudiante",function(req,res){
    res.json("ruta para actualizar un estudiante")
});

app.delete("/eliminarEstudiante/:idEstudiante",function(req,res){
    res.json("ruta para eliminar un estudiante");
})
//React la exportacion es default export =<nombre del componente>
//si embargo en node la exporta se hace de la siguiente manera
module.exports=app;