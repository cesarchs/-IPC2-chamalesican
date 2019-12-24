//Configuracion del puerto
require("./config/config");
//Requerir express de los node modules
const express = require("express");
//Crear instancia del framework como si fuera un objeto
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    req.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//necesarios para darme el formato json
const bodyParser=require('body-parser');
app.use(bodyParser.json({ extended:false }))

//rutas para hacer match con los routes 
app.use(require("./routes/estudiante.route"));
app.use(require("./routes/catedratico.route"));
app.use(require("./routes/colaborador.route"));
app.use(require("./routes/administrador.route"));

//Levantar el server
app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT);
});