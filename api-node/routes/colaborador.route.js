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

const archivadorColaborador=require('../archivador/archivadorColaborador')

app.post("/createColaborador", function(req, res) {
    const body=req.body
    console.log(body);
     let Colaborador = archivadorColaborador.crear(body);
    res.json(Colaborador);
});

app.get("/mostrarColaborador", function(req, res) {
    let colaborador=archivadorColaborador.getListado()
    res.json(colaborador);
});

app.put("/actualizarColaborador/:idColaborador",function(req,res){
    res.json("ruta para actualizar un colaborador")
});

app.delete("/eliminarColaborador/:idColaborador",function(req,res){
    res.json("ruta para eliminar un colaborador");
})
//React la exportacion es export default =<nombre del componente>
//si embargo en node la exporta se hace de la siguiente manera
module.exports=app;