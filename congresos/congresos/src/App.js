import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import AdministradorForm from './components/forms/Administrador';
import EstudianteForm from './components/forms/Estudiante';
import ColaboradorForm from './components/forms/Colaborador';
import CatadraticoForm from './components/forms/Catedratico';
import DashBoard from './pages/DashBoard';
import Inicio from './pages/Inicio';
import PAdmin from './pages/PAmin';
import Listado from './pages/Listado';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import TareaForm from './components/forms/TareaForm';


//crear curso
//      Noticia
//      Tarea

function App(){
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path ="/" component ={Inicio}/>
      <Route exact path ="/Login" component ={Login}/>
      <Route exact path = "/Addadministrador" component ={AdministradorForm}/>
      <Route exact path = "/Addestudiante" component = {EstudianteForm}/>
      <Route exact path = "/Addcolaborador" component = {ColaboradorForm}/>
      <Route exact path = "/Addcatedratico" component = {CatadraticoForm}/>
      <Route exact path ="/DashBoard" component={DashBoard}/>
      <Route exact path ="/inicio" component = {Inicio}/>
      <Route exact path ="/pageAdmin" component ={PAdmin}/>
      <Route exact path ="/listadoEstudiantes" component={Listado}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
