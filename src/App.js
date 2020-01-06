import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import PAdmin              from './pages/PAmin';
import PCatedratico        from './pages/PCatedratico';
import PColaborador        from './pages/PColaborador';
import PEstudinate         from './pages/PEstudiante';
import CreateContainerAdministrador from './components/forms/Admins/createContainerAdministrador';
import CreateContainerEstudiante    from './components/forms/Estudiante/createContainerEstudiante';
import createContainerCatedratico   from './components/forms/Catedratico/createContainerCatedratico';
import CreateContainerColaborador   from './components/forms/Colaborador/createContainerColaborador';
import UpdateContainerEstudiante    from './components/forms/Estudiante/updateContainerEstudiante';
import UpdateContainerCatedratico   from './components/forms/Catedratico/updateContainerCatedratico';
import UpdateContainerColaborador   from './components/forms/Colaborador/updateContainerColaborador';
import UpdateContainerAdministrador from './components/forms/Admins/UpdateContainerAdministrador';
import DashBoard           from './pages/DashBoard';
import Inicio              from './pages/Inicio';
import Listado             from './pages/Listado';
import ListadoCola         from './pages/ListadoCola';
import ListadoAdmins       from './pages/ListadoAdmin';
import ListadoCatedraticos from './pages/ListadoCate';
import CursoForm           from './components/forms/Curso';
import ListadoCursos       from './pages/ListadoCursos';
import BienForm            from './components/forms/Bien';
import PagoForm            from './components/forms/pagos';
import ActividadForm       from './components/forms/Actividad';
import CargaMasiva         from './components/File';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"

function App(){return (
  <BrowserRouter>
    <Switch>
      <Route exact path ="/" component ={Inicio}/>
      <Route exact path ="/Login" component ={Login}/>
      <Route exact path ="/inicio" component = {Inicio}/>
      <Route exact path ="/pageAdmin" component ={PAdmin}/>
      <Route exact path ="/pageCatedratico" component ={PCatedratico}/>
      <Route exact path ="/pageColaborador" component ={PColaborador}/>
      <Route exact path ="/pageEstudiante" component ={PEstudinate}/>
      <Route exact path ="/Addadministrador" component ={CreateContainerAdministrador}/>
      <Route exact path ="/Addestudiante" component = {CreateContainerEstudiante}/>
      <Route exact path ="/Addcatedratico" component = {createContainerCatedratico}/>
      <Route exact path ="/Addcolaborador" component = {CreateContainerColaborador}/>
      <Route exact path ="/UpdateEstudiante" component = {UpdateContainerEstudiante}/> 
      <Route exact path ="/UpdateCatedratico" component = {UpdateContainerCatedratico}/>
      <Route exact path ="/UpdateColaborador" component = {UpdateContainerColaborador}/>
      <Route exact path ="/UpdateAdministrador" component = {UpdateContainerAdministrador}/>
      <Route exact path ="/DashBoard" component={DashBoard}/>
      <Route exact path ="/listadoEstudiantes" component={Listado}/>
      <Route exact path ="/listadoColaboradores" component={ListadoCola}/>
      <Route exact path ="/listadoAdmins" component={ListadoAdmins}/>
      <Route exact path ="/listadoCatedraticos" component={ListadoCatedraticos}/>
      <Route exact path ="/AddCurso" component={CursoForm}/> 
      <Route exact path ="/listadoCursos" component={ListadoCursos}/>
      <Route exact path ="/AddBien" component ={BienForm}/>
      <Route exact path ="/AddPago" component ={PagoForm}/>
      <Route exact path ="/AddActividad" component ={ActividadForm}/>
      <Route exact path ="/Carga" component ={CargaMasiva}/>
    </Switch>
  </BrowserRouter>
  );}
export default App;
